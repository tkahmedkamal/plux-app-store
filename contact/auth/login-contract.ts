import type { output } from 'zod';

import { email, object, string } from 'zod';

export const LoginSchema = object({
	email: email('Enter a valid email address'),
	password: string().min(8, 'Password must contain at least 8 characters'),
});

export type LoginPayload = output<typeof LoginSchema>;

export interface LoginApiResponse extends BaseResponse {
	data: AuthData;
}
