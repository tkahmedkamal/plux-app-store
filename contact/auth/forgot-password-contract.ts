import type { output } from 'zod';

import { email, object } from 'zod';

export const forgotPasswordSchema = object({
	email: email('Enter a valid email address'),
});

export type ForgotPasswordPayload = output<typeof forgotPasswordSchema>;

export interface ForgotPasswordApiResponse extends BaseResponse {
	data: {
		message: string;
	};
}
