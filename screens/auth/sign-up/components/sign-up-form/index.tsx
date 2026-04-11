import type { SignupPayload } from '@/contact/auth/signup-contract';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Link, router } from 'expo-router';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, Alert } from 'react-native';

import { AppButton, AppInput, AppPicker } from '@/components';
import { SignupSchema } from '@/contact/auth/signup-contract';
import { useTheme } from '@/hooks';
import { signupApi } from '@/services/auth-service';
import { handleFocusOnError } from '@/utils';

import makeStyles from './styles';

const SignupForm = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	const { mutate: signup, isPending } = useMutation({
		mutationFn: signupApi,
		onSuccess: () => {
			Alert.alert('Account created successfully', 'You can now login to your account');
			router.push('/(app)/(auth)/log-in');
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
	} = useForm<SignupPayload>({
		resolver: zodResolver(SignupSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			role: '',
		},
		mode: 'all',
	});

	const onSubmit = (values: SignupPayload) => {
		signup(values);
	};

	const handleSubmitEditing = () => {
		handleFocusOnError<SignupPayload>({
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
					label='Name'
					name='name'
					placeholder='Enter your name'
					editable={!isPending}
					onSubmitEditing={handleSubmitEditing}
				/>
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
				<AppPicker
					control={control}
					label='Role'
					name='role'
					options={[
						{
							label: 'Seller',
							value: 'seller',
						},
						{
							label: 'Customer',
							value: 'customer',
						},
					]}
					placeholder='Select Role'
					error={errors.role?.message}
				/>
				<Text style={styles.text}>
					By signing up you agree to our{' '}
					<Link href='/' suppressHighlighting={true} style={styles.link}>
						Terms
					</Link>
					,{' '}
					<Link href='/' suppressHighlighting={true} style={styles.link}>
						Privacy Policy
					</Link>
					, and{' '}
					<Link href='/' suppressHighlighting={true} style={styles.link}>
						Cookie Use
					</Link>
				</Text>
			</View>
			<AppButton title='Create an Account' onPress={handleSubmit(onSubmit)} isLoading={isPending} />
		</View>
	);
};

export default SignupForm;
