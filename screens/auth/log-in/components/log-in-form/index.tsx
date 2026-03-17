import type { output } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text } from 'react-native';
import { email, object, string } from 'zod';

import { AppButton, AppInput } from '@/components';
import { useTheme } from '@/hooks';
import { handleFocusOnError } from '@/utils';

import makeStyles from './styles';

const LoginSchema = object({
	email: email('Enter a valid email address'),
	password: string().min(6, 'Password must contain at least 6 characters'),
});

type Login = output<typeof LoginSchema>;

const LoginForm = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	const {
		control,
		setFocus,
		formState: { isValid, errors },
		handleSubmit,
	} = useForm<Login>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'all',
	});

	const onSubmit = (values: Login) => {
		console.log(values);
	};

	const handleSubmitEditing = () => {
		handleFocusOnError<Login>({
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
			<AppButton title='Log In' onPress={handleSubmit(onSubmit)} />
		</View>
	);
};

export default LoginForm;
