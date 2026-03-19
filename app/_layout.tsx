import {
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	useFonts,
} from '@expo-google-fonts/inter';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { MainProvider } from '@/providers';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [loaded, error] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<MainProvider>
			<Slot />
			<StatusBar barStyle='light-content' />
		</MainProvider>
	);
};

export default RootLayout;
