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
import { verifyOtpApi } from '@/services/auth-service';
import { useAuthFlowStore } from '@/store';

import makeStyles from './styles';

const VerificationCodeForm = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const email = useAuthFlowStore((state) => state.email);
	const setEmail = useAuthFlowStore((state) => state.setEmail);

	const { mutate: verifyOtp, isPending } = useMutation({
		mutationFn: verifyOtpApi,
		onSuccess: () => {
			setEmail(null);
			router.push('/(app)/(auth)/reset-password');
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
		verifyOtp({
			...values,
			email: email ?? '',
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.fieldContainer}>
				<OTPInput name='otpCode' control={control} onResendCode={() => {}} />
			</View>
			<AppButton title='Continue' onPress={handleSubmit(onSubmit)} isLoading={isPending} />
		</View>
	);
};

export default VerificationCodeForm;
