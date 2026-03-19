import { Stack } from 'expo-router';
import React from 'react';

const AuthLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='sign-up' />
			<Stack.Screen name='log-in' />
			<Stack.Screen name='forgot-password' />
			<Stack.Screen name='verification-code' />
		</Stack>
	);
};

export default AuthLayout;
