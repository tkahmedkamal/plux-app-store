import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';
import { ms } from 'react-native-size-matters';

import { useTheme } from '@/hooks';

const TabsLayout = () => {
	const { colors, fonts, fontSizes, spaces } = useTheme();

	return (
		<Tabs
			screenOptions={{
				sceneStyle: {
					backgroundColor: colors.background,
				},
				tabBarStyle: {
					height: ms(100),
					backgroundColor: colors.background,
					paddingTop: ms(spaces.lg),
					paddingHorizontal: ms(spaces.md),
					borderColor: colors.border,
				},
				tabBarInactiveTintColor: colors.mutedForeground,
				tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: {
					fontFamily: fonts.medium,
					fontSize: ms(fontSizes.xs),
					marginTop: ms(spaces.xxs),
				},
			}}
		>
			<Tabs.Screen
				name='home'
				options={{
					title: 'Home',
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='home-outline' size={ms(size)} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					title: 'Search',
					headerShown: false,
					tabBarIcon: ({ color, size }) => <Ionicons name='search' size={ms(size)} color={color} />,
				}}
			/>
			<Tabs.Screen
				name='wishlist'
				options={{
					title: 'Wishlist',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='heart-outline' size={ms(size)} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='cart'
				options={{
					title: 'Cart',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='cart-outline' size={ms(size)} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='account'
				options={{
					title: 'Account',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='person-outline' size={ms(size)} color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
