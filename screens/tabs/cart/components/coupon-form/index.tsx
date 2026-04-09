import type { output } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { object, string } from 'zod';

import { AppButton, AppInput } from '@/components';
import { useTheme } from '@/hooks';

import makeStyles from './style';

const couponSchema = object({
	coupon: string().min(1, 'Coupon is required'),
});

type Coupon = output<typeof couponSchema>;

const CouponForm = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const { control, handleSubmit } = useForm<Coupon>({
		resolver: zodResolver(couponSchema),
		defaultValues: {
			coupon: '',
		},
		mode: 'onSubmit',
	});

	const onSubmit = (values: Coupon) => {
		console.log(values);
	};

	return (
		<View style={styles.container}>
			<AppInput placeholder='Enter coupon code' name='coupon' control={control} hideError />
			<AppButton title='Apply' onPress={handleSubmit(onSubmit)} />
		</View>
	);
};

export default CouponForm;
