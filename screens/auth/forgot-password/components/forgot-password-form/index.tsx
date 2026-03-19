import type { output } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { email, object } from 'zod';

import { AppButton, AppInput } from '@/components';
import { useTheme } from '@/hooks';
import { handleFocusOnError } from '@/utils';

import makeStyles from './styles';

const forgotPasswordSchema = object({
	email: email('Enter a valid email address'),
});

type ForgotPassword = output<typeof forgotPasswordSchema>;

const ForgotPasswordForm = () => {
	const { push } = useRouter();
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

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
		console.log(values);
		push('/(app)/(auth)/verification-code');
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
					onSubmitEditing={handleSubmitEditing}
				/>
			</View>
			<AppButton title='Send Code' onPress={handleSubmit(onSubmit)} />
		</View>
	);
};

export default ForgotPasswordForm;
