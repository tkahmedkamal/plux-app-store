import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { AppButton } from '@/components';
import useAuthStore from '@/store/auth-store';

const Account = () => {
	const clearAuth = useAuthStore((state) => state.clearAuth);
	const user = useAuthStore((state) => state.user);
	const accessToken = useAuthStore((state) => state.accessToken);

	const handleLogout = () => {
		clearAuth();
		router.replace('/(app)/(auth)/log-in');
	};

	console.log('===:: CURRENT USER ::===\n', JSON.stringify({ user, accessToken }, null, 2));

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<AppButton title='Logout' onPress={handleLogout} />
		</View>
	);
};

export default Account;
