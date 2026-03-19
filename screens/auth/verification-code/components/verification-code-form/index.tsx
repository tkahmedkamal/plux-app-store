import type { output } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { object, string } from 'zod';

import { AppButton, OTPInput } from '@/components';
import { useTheme } from '@/hooks';

import makeStyles from './styles';

const verificationCodeSchema = object({
	otpCode: string().min(4, 'Otp code must be 4 digits'),
});

type VerificationCode = output<typeof verificationCodeSchema>;

const VerificationCodeForm = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	const { control, handleSubmit } = useForm<VerificationCode>({
		resolver: zodResolver(verificationCodeSchema),
		defaultValues: {
			otpCode: '',
		},
		mode: 'all',
	});

	const onSubmit = (values: VerificationCode) => {
		console.log(values);
	};

	return (
		<View style={styles.container}>
			<View style={styles.fieldContainer}>
				<OTPInput name='otpCode' control={control} onResendCode={() => {}} />
			</View>
			<AppButton title='Continue' onPress={handleSubmit(onSubmit)} />
		</View>
	);
};

export default VerificationCodeForm;
