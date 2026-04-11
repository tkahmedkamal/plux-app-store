import type { AxiosError } from 'axios';

import axios from 'axios';
import { router } from 'expo-router';
import { Alert } from 'react-native';

import useAuthStore from '@/store/auth-store';

export const envConfig = {
	baseApiUrl: process.env.EXPO_PUBLIC_API_URL!,
};

export const apiRoutes = {
	signup: `${envConfig.baseApiUrl}/auth/register`,
	login: `${envConfig.baseApiUrl}/auth/login`,
};

export const api = axios.create({
	baseURL: envConfig.baseApiUrl,
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use((config) => {
	const token = useAuthStore.getState().accessToken;

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error: AxiosError) => {
		const status = error.response?.status;
		const requestUrl = error.config?.url ?? '';
		const isAuthEndpoint = requestUrl.includes('/auth/');
		const hasToken = Boolean(useAuthStore.getState().accessToken);
		const handlingUnauthorized = useAuthStore.getState().handlingUnauthorized;
		const setHandlingUnauthorized = useAuthStore.getState().setHandlingUnauthorized;

		if (status === 401 && hasToken && !isAuthEndpoint && !handlingUnauthorized) {
			setHandlingUnauthorized(true);
			useAuthStore.getState().clearAuth();
			router.replace('/(app)/(auth)/log-in');
			Alert.alert('Unauthorized', 'Token is invalid or expired, please login again.');
		}

		return Promise.reject(error);
	}
);
