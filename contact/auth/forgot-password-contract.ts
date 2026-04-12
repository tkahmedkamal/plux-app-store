import type { output } from 'zod';

import { email, object } from 'zod';

export const forgotPasswordSchema = object({
	email: email('Enter a valid email address'),
});

export type ForgotPasswordType = output<typeof forgotPasswordSchema>;

export type RequestOtpPayload = ForgotPasswordType;

export interface RequestOtpApiResponse extends BaseResponse {
	data: {
		message: string;
	};
}
