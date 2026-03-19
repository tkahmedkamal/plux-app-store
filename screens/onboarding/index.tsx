import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Image, Text, View } from 'react-native';

import { AppButton, AppSafeArea } from '@/components';
import { useTheme } from '@/hooks';

import makeStyles from './styles';

const OnboardingScreen = () => {
	const { replace } = useRouter();
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<AppSafeArea withoutPadding>
			<Text style={styles.text}>Define yourself in your unique way.</Text>
			<View style={styles.linesImageContainer}>
				<Image
					source={require('@/assets/images/lines-img.png')}
					alt='Onboarding Image'
					resizeMode='cover'
					style={styles.linesImage}
				/>
			</View>
			<Image
				source={require('@/assets/images/onboarding-img.png')}
				alt='Onboarding Image'
				style={styles.image}
			/>
			<View style={styles.actionContainer}>
				<AppButton
					title='Get Started'
					iconAfter={
						<Feather name='arrow-right' size={24} color={theme.colors.primaryForeground} />
					}
					onPress={() => replace('/(app)/(auth)/sign-up')}
				/>
			</View>
		</AppSafeArea>
	);
};

export default OnboardingScreen;
