import type { ForgotPasswordPayload } from '@/contact/auth/forgot-password-contract';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, View } from 'react-native';

import { AppButton, AppInput } from '@/components';
import { forgotPasswordSchema } from '@/contact/auth/forgot-password-contract';
import { useTheme } from '@/hooks';
import { forgotPasswordApi } from '@/services/auth-service';
import { useAuthFlowStore } from '@/store';
import { handleFocusOnError } from '@/utils';

import makeStyles from './styles';

const ForgotPasswordForm = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const setEmail = useAuthFlowStore((state) => state.setEmail);

	const { mutate: requestOtp, isPending } = useMutation({
		mutationFn: forgotPasswordApi,
		onError: (error) => {
			Alert.alert('Error', error.message);
		},
	});

	const {
		control,
		setFocus,
		formState: { isValid, errors },
		handleSubmit,
	} = useForm<ForgotPasswordPayload>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: '',
		},
		mode: 'all',
	});

	const onSubmit = (values: ForgotPasswordPayload) => {
		requestOtp(values, {
			onSuccess: () => {
				setEmail(values.email);
				router.push('/(app)/(auth)/verification-code');
			},
		});
	};

	const handleSubmitEditing = () => {
		handleFocusOnError<ForgotPasswordPayload>({
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
