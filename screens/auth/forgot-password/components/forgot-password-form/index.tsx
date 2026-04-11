import type { output } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, View } from 'react-native';
import { email, object } from 'zod';

import { AppButton, AppInput } from '@/components';
import { useTheme } from '@/hooks';
import { requestOtpApi } from '@/services/auth';
import { useAuthFlowStore } from '@/store';
import { handleFocusOnError } from '@/utils';

import makeStyles from './styles';

const forgotPasswordSchema = object({
	email: email('Enter a valid email address'),
});

export type ForgotPassword = output<typeof forgotPasswordSchema>;

const ForgotPasswordForm = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const setEmail = useAuthFlowStore((state) => state.setEmail);

	const { mutate: requestOtp, isPending } = useMutation({
		mutationFn: requestOtpApi,
		onError: (error) => {
			Alert.alert('Error', error.message);
		},
	});

	const {
		control,
		setFocus,
		formState: { isValid, errors },
		handleSubmit,
	} = useForm<ForgotPassword>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: '',
		},
		mode: 'all',
	});

	const onSubmit = (values: ForgotPassword) => {
		requestOtp(values, {
			onSuccess: () => {
				setEmail(values.email);
				router.push('/(app)/(auth)/verification-code');
			},
		});
	};

	const handleSubmitEditing = () => {
		handleFocusOnError<ForgotPassword>({
			isValid,
			errors,
			setFocus,
			onSubmit: handleSubmit(onSubmit),
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.fieldContainer}>
				<AppInput
					control={control}
					name='email'
					label='Email'
					placeholder='example@domin.com'
					keyboardType='email-address'
					editable={!isPending}
					onSubmitEditing={handleSubmitEditing}
				/>
			</View>
			<AppButton title='Send Code' onPress={handleSubmit(onSubmit)} isLoading={isPending} />
		</View>
	);
};

export default ForgotPasswordForm;
