import type { output } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { object, string } from 'zod';

import { AppButton, AppInput } from '@/components';
import { useTheme } from '@/hooks';
import { handleFocusOnError } from '@/utils';

import makeStyles from './styles';

const ResetPasswordSchema = object({
	password: string().min(6, 'Password must contain at least 6 characters'),
	confirmPassword: string().min(1, 'Confirm Password is Required'),
}).refine((data) => data.password === data.confirmPassword, {
	error: "Passwords don't match",
	path: ['confirmPassword'],
});

type ResetPassword = output<typeof ResetPasswordSchema>;

const ResetPasswordForm = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	const {
		control,
		formState: { isValid, errors },
		setFocus,
		handleSubmit,
	} = useForm<ResetPassword>({
		resolver: zodResolver(ResetPasswordSchema),
		defaultValues: {
			password: '',
			confirmPassword: '',
		},
		mode: 'all',
	});

	const onSubmit = (values: ResetPassword) => {
		console.log(values);
	};

	const handleSubmitEditing = () => {
		handleFocusOnError<ResetPassword>({
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
					onSubmitEditing={handleSubmitEditing}
				/>
				<AppInput
					control={control}
					name='confirmPassword'
					label='Confirm Password'
					placeholder='••••••'
					secureTextEntry
					onSubmitEditing={handleSubmitEditing}
				/>
			</View>
			<AppButton title='Continue' onPress={handleSubmit(onSubmit)} />
		</View>
	);
};

export default ResetPasswordForm;
