import type { VerificationOtpType } from '@/contact/auth/verify-otp-contract';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, View } from 'react-native';

import { AppButton, OTPInput } from '@/components';
import { verificationOtpSchema } from '@/contact/auth/verify-otp-contract';
import { useTheme } from '@/hooks';
import { resendOtpApi, verifyOtpApi } from '@/services/auth-service';
import { useAuthFlowStore } from '@/store';

import makeStyles from './styles';

const VerificationCodeForm = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const email = useAuthFlowStore((state) => state.email);
	const setEmail = useAuthFlowStore((state) => state.setEmail);
	const setPasswordResetToken = useAuthFlowStore((state) => state.setPasswordResetToken);

	const { mutate: verifyOtp, isPending } = useMutation({
		mutationFn: verifyOtpApi,
		onSuccess: (data) => {
			setEmail(null);
			setPasswordResetToken(data.data.passwordResetToken);
			router.replace('/(app)/(auth)/reset-password');
		},
		onError: (error) => {
			Alert.alert('Error', error.message);
		},
	});

	const { mutate: resendOtp } = useMutation({
		mutationFn: resendOtpApi,
		onSuccess: () => {
			Alert.alert('OTP resent successfully', 'Please check your email for the new OTP.');
		},
		onError: (error) => {
			Alert.alert('Error', error.message);
		},
	});

	const { control, handleSubmit } = useForm<VerificationOtpType>({
		resolver: zodResolver(verificationOtpSchema),
		defaultValues: {
			otpCode: '',
		},
		mode: 'all',
	});

	const onSubmit = (values: VerificationOtpType) => {
		if (!email) {
			Alert.alert('Session Expired', 'Please request a new OTP.');
			router.replace('/(app)/(auth)/forgot-password');
			return;
		}

		verifyOtp({
			...values,
			email,
		});
	};

	const handleResendOtp = () => {
		if (!email) {
			Alert.alert('Session Expired', 'Please request a new OTP.');
			router.replace('/(app)/(auth)/forgot-password');
			return;
		}

		resendOtp({ email });
	};

	return (
		<View style={styles.container}>
			<View style={styles.fieldContainer}>
				<OTPInput name='otpCode' control={control} onResendCode={handleResendOtp} />
			</View>
			<AppButton title='Continue' onPress={handleSubmit(onSubmit)} isLoading={isPending} />
		</View>
	);
};

export default VerificationCodeForm;
