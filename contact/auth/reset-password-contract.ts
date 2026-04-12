import type { output } from 'zod';

import { object, string } from 'zod';

export const resetPasswordSchema = object({
	password: string().min(8, 'Password must contain at least 8 characters'),
	confirmPassword: string().min(1, 'Confirm Password is Required'),
}).refine((data) => data.password === data.confirmPassword, {
	error: "Passwords don't match",
	path: ['confirmPassword'],
});

export type ResetPasswordType = output<typeof resetPasswordSchema>;

export interface ResetPasswordPayload extends Pick<ResetPasswordType, 'password'> {
	passwordResetToken: string;
}

export interface ResetPasswordApiResponse extends BaseResponse {
	data: {
		message: string;
	};
}
