import type { ResetPasswordType } from '@/contact/auth/reset-password-contract';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, View } from 'react-native';

import { AppButton, AppInput } from '@/components';
import { resetPasswordSchema } from '@/contact/auth/reset-password-contract';
import { useTheme } from '@/hooks';
import { resetPasswordApi } from '@/services/auth-service';
import { useAuthFlowStore } from '@/store';
import { handleFocusOnError } from '@/utils';

import makeStyles from './styles';

const ResetPasswordForm = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const passwordResetToken = useAuthFlowStore((state) => state.passwordResetToken);
	const setPasswordResetToken = useAuthFlowStore((state) => state.setPasswordResetToken);

	useEffect(() => {
		return () => {
			setPasswordResetToken(null);
		};
	}, [setPasswordResetToken]);

	const { mutate: resetPassword, isPending } = useMutation({
		mutationFn: resetPasswordApi,
		onSuccess: (data) => {
			Alert.alert('Password reset successfully', data.data.message);
			setPasswordResetToken(null);
			router.replace('/(app)/(auth)/log-in');
		},
		onError: (error) => {
			Alert.alert('Error', error.message);
		},
	});

	const {
		control,
		formState: { isValid, errors },
		setFocus,
		handleSubmit,
	} = useForm<ResetPasswordType>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			password: '',
			confirmPassword: '',
		},
		mode: 'all',
	});

	const onSubmit = (values: ResetPasswordType) => {
		if (!passwordResetToken) {
			Alert.alert('Session Expired', 'Please request a new password reset token.');
			router.replace('/(app)/(auth)/forgot-password');
			return;
		}

		resetPassword({
			password: values.password,
			passwordResetToken: passwordResetToken,
		});
	};

	const handleSubmitEditing = () => {
		handleFocusOnError<ResetPasswordType>({
			isValid,
			errors,
			setFocus,
			onSubmit: handleSubmit(onSubmit),
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.fieldsContainer}>
				<AppInput
					control={control}
					name='password'
					label='Password'
					placeholder='••••••'
					secureTextEntry
					editable={!isPending}
					onSubmitEditing={handleSubmitEditing}
				/>
				<AppInput
					control={control}
					name='confirmPassword'
					label='Confirm Password'
					placeholder='••••••'
					secureTextEntry
					editable={!isPending}
					onSubmitEditing={handleSubmitEditing}
				/>
			</View>
			<AppButton title='Continue' onPress={handleSubmit(onSubmit)} isLoading={isPending} />
		</View>
	);
};

export default ResetPasswordForm;
