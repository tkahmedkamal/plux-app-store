import { Stack } from 'expo-router';
import React from 'react';

import { useTheme } from '@/hooks';

const HomeLayout = () => {
	const { colors, fonts, fontSizes } = useTheme();

	return (
		<Stack
			screenOptions={{
				contentStyle: {
					backgroundColor: colors.background,
				},
				headerLargeTitleEnabled: true,
				headerLargeTitleStyle: {
					fontFamily: fonts.semiBold,
					fontSize: fontSizes.xxl,
					color: colors.foreground,
				},
				headerTitleStyle: {
					fontFamily: fonts.semiBold,
					fontSize: fontSizes.xl,
					color: colors.foreground,
				},
			}}
		>
			<Stack.Screen
				name='index'
				options={{
					title: 'Discover',
				}}
			/>
		</Stack>
	);
};

export default HomeLayout;
