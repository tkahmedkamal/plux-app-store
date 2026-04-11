import type { output } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, View } from 'react-native';
import { object, string } from 'zod';

import { AppButton, OTPInput } from '@/components';
import { useTheme } from '@/hooks';
import { verifyOtpApi } from '@/services/auth';
import { useAuthFlowStore } from '@/store';

import makeStyles from './styles';

const verificationCodeSchema = object({
	otpCode: string().min(4, 'Otp code must be 4 digits'),
});

export type VerificationCode = output<typeof verificationCodeSchema>;

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

	const { control, handleSubmit } = useForm<VerificationCode>({
		resolver: zodResolver(verificationCodeSchema),
		defaultValues: {
			otpCode: '',
		},
		mode: 'all',
	});

	const onSubmit = (values: VerificationCode) => {
		verifyOtp({
			...values,
			email,
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
