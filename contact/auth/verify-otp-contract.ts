import type { output } from 'zod';

import { object, string } from 'zod';

export const verificationOtpSchema = object({
	otpCode: string().min(4, 'Otp code must be 4 digits'),
});

export type VerificationOtpType = output<typeof verificationOtpSchema>;

export interface VerifyOtpPayload extends VerificationOtpType {
	email: string;
}

export interface VerifyOtpApiResponse extends BaseResponse {
	data: {
		user: User;
		accessToken: string;
		refreshToken: string;
		passwordResetToken: string;
	};
}
