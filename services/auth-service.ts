import type {
	ForgotPasswordApiResponse,
	ForgotPasswordPayload,
} from '@/contact/auth/forgot-password-contract';
import type { LoginApiResponse, LoginPayload } from '@/contact/auth/login-contract';
import type { SignupApiResponse, SignupPayload } from '@/contact/auth/signup-contract';
import type {
	ResendOtpPayload,
	VerifyOtpApiResponse,
	VerifyOtpPayload,
} from '@/contact/auth/verify-otp-contract';

import { api, apiRoutes } from '@/config';
import { catchApiError } from '@/utils';

export const signupApi = async (data: SignupPayload): Promise<SignupApiResponse> => {
	try {
		const response = await api.post(apiRoutes.signup, data);
		return response.data as SignupApiResponse;
	} catch (error: unknown) {
		throw catchApiError(error);
	}
};

export const loginApi = async (data: LoginPayload): Promise<LoginApiResponse> => {
	try {
		const response = await api.post(apiRoutes.login, data);
		return response.data as LoginApiResponse;
	} catch (error: unknown) {
		throw catchApiError(error);
	}
};

export const forgotPasswordApi = async (
	data: ForgotPasswordPayload
): Promise<ForgotPasswordApiResponse> => {
	try {
		const response = await api.post(apiRoutes.requestOtp, data);
		return response.data as ForgotPasswordApiResponse;
	} catch (error: unknown) {
		throw catchApiError(error);
	}
};

export const verifyOtpApi = async (data: VerifyOtpPayload): Promise<VerifyOtpApiResponse> => {
	try {
		const response = await api.post(apiRoutes.verifyOtp, data);
		return response.data as VerifyOtpApiResponse;
	} catch (error: unknown) {
		throw catchApiError(error);
	}
};

export const resendOtpApi = async (data: ResendOtpPayload) => {
	forgotPasswordApi(data);
};
