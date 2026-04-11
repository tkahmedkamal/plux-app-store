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
		contentType: 'application/json',
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
		if (error.response?.status && error.response.status === 401) {
			useAuthStore.getState().clearAuth();
			router.replace('/(app)/(auth)/log-in');
			Alert.alert('Unauthorized', 'Token is invalid or expired, please login again.');
		}

		return Promise.reject(error);
	}
);
