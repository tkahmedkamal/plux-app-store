import { Stack } from 'expo-router';

import { useTheme } from '@/hooks';

const AppLayout = () => {
	const { colors } = useTheme();

	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='index' />
			<Stack.Screen name='(auth)' />
			<Stack.Screen
				name='(sheets)/filter'
				options={{
					presentation: 'formSheet',
					sheetAllowedDetents: [0.52],
					sheetGrabberVisible: true,
					sheetExpandsWhenScrolledToEdge: true,
					contentStyle: {
						backgroundColor: colors.modal,
					},
				}}
			/>
		</Stack>
	);
};

export default AppLayout;
