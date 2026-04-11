import type { output } from 'zod';

import { email, object, string } from 'zod';

export const SignupSchema = object({
	name: string().min(3, 'Your name should be at least 3 characters'),
	email: email('Enter a valid email address'),
	password: string().min(8, 'Password must contain at least 8 characters'),
	role: string().refine(
		(value) => {
			return value.includes('customer') || value.includes('seller');
		},
		{
			error: 'The role field is required',
		}
	),
});

export type SignupPayload = output<typeof SignupSchema>;

export interface SignupApiResponse extends BaseResponse {
	data: AuthData;
}
