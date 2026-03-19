import type { output } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text } from 'react-native';
import { email, object, string } from 'zod';

import { AppButton, AppInput, AppPicker } from '@/components';
import { useTheme } from '@/hooks';
import { handleFocusOnError } from '@/utils';

import makeStyles from './styles';

const SignupSchema = object({
	name: string().min(3, 'Your name should be at least 3 characters'),
	email: email('Enter a valid email address'),
	password: string().min(6, 'Password must contain at least 6 characters'),
	role: string().refine(
		(value) => {
			return value.includes('customer') || value.includes('seller');
		},
		{
			error: 'The role field is required',
		}
	),
});

type Signup = output<typeof SignupSchema>;

const SignupForm = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	const {
		control,
		setFocus,
		formState: { isValid, errors },
		handleSubmit,
	} = useForm<Signup>({
		resolver: zodResolver(SignupSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			role: '',
		},
		mode: 'all',
	});

	const onSubmit = (values: Signup) => {
		console.log(values);
	};

	const handleSubmitEditing = () => {
		handleFocusOnError<Signup>({
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
					onSubmitEditing={handleSubmitEditing}
				/>
				<AppInput
					control={control}
					name='email'
					label='Email'
					placeholder='example@domin.com'
					keyboardType='email-address'
					onSubmitEditing={handleSubmitEditing}
				/>
				<AppInput
					control={control}
					label='Password'
					name='password'
					placeholder='••••••'
					secureTextEntry
					onSubmitEditing={handleSubmitEditing}
				/>
				<AppPicker
					control={control}
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
			<AppButton title='Create an Account' onPress={handleSubmit(onSubmit)} />
		</View>
	);
};

export default SignupForm;
