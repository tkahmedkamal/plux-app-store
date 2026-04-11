import type { LoginApiResponse, SignupApiResponse } from './types';
import type { Login } from '@/screens/auth/log-in/components/log-in-form';
import type { Signup } from '@/screens/auth/sign-up/components/sign-up-form';

import { api, apiRoutes } from '@/config';
import { catchApiError } from '@/utils';

export const signupApi = async (data: Signup): Promise<SignupApiResponse> => {
	try {
		const response = await api.post(apiRoutes.signup, data);
		return response.data as SignupApiResponse;
	} catch (error: unknown) {
		throw catchApiError(error);
	}
};

export const loginApi = async (data: Login): Promise<LoginApiResponse> => {
	try {
		const response = await api.post(apiRoutes.login, data);
		return response.data as LoginApiResponse;
	} catch (error: unknown) {
		throw catchApiError(error);
	}
};
