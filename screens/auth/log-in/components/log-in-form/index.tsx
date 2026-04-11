import type { LoginPayload } from '@/contact/auth/login-contract';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Link, router } from 'expo-router';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, Alert } from 'react-native';

import { AppButton, AppInput } from '@/components';
import { LoginSchema } from '@/contact/auth/login-contract';
import { useTheme } from '@/hooks';
import { loginApi } from '@/services/auth-service';
import { useAuthStore } from '@/store';
import { handleFocusOnError } from '@/utils';

import makeStyles from './styles';

const LoginForm = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const setUser = useAuthStore((state) => state.setUser);
	const setAccessToken = useAuthStore((state) => state.setAccessToken);

	const { mutate: login, isPending } = useMutation({
		mutationFn: loginApi,
		onSuccess: (data) => {
			setUser(data.data.user);
			setAccessToken(data.data.accessToken);
			router.push('/(app)/(tabs)/home');
		},
		onError: (error) => {
			Alert.alert('Error', error.message);
		},
	});

	const {
		control,
		setFocus,
		formState: { isValid, errors },
		handleSubmit,
	} = useForm<LoginPayload>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: 'dev.tkahmedkamal@gmail.com',
			password: 'pass1234',
		},
		mode: 'all',
	});

	const onSubmit = (values: LoginPayload) => {
		login(values);
	};

	const handleSubmitEditing = () => {
		handleFocusOnError<LoginPayload>({
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
					name='email'
					label='Email'
					placeholder='example@domin.com'
					keyboardType='email-address'
					editable={!isPending}
					onSubmitEditing={handleSubmitEditing}
				/>
				<AppInput
					control={control}
					label='Password'
					name='password'
					placeholder='••••••'
					secureTextEntry
					editable={!isPending}
					onSubmitEditing={handleSubmitEditing}
				/>
				<Text style={styles.text}>
					Forgot your password?{' '}
					<Link
						href='/(app)/(auth)/forgot-password'
						suppressHighlighting={true}
						style={styles.link}
					>
						Reset your password
					</Link>
				</Text>
			</View>
			<AppButton title='Log In' onPress={handleSubmit(onSubmit)} isLoading={isPending} />
		</View>
	);
};

export default LoginForm;
