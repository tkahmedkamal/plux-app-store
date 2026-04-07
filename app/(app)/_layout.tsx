import { Stack } from 'expo-router';

import { CustomStackHeader } from '@/components';
import { useTheme } from '@/hooks';

const AppLayout = () => {
	const { colors } = useTheme();

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name='index' />
			<Stack.Screen name='(auth)' />
			<Stack.Screen
				name='product/[id]/index'
				options={{
					headerShown: true,
					title: 'Details',
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: colors.background,
					},
					header: ({ options }) => <CustomStackHeader title={options.title!} showBackButton />,
				}}
			/>
		</Stack>
	);
};

export default AppLayout;
