import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';

import { AppButton, AppSafeArea, DividerWithText, ScreenHeader } from '@/components';
import { keyboardBehavior } from '@/constants';
import { useTheme } from '@/hooks';

import { AuthPrompt } from '../components';

import { LoginForm } from './components';
import makeStyles from './styles';

const LoginScreen = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<KeyboardAvoidingView style={styles.container} behavior={keyboardBehavior}>
			<AppSafeArea>
				<ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
					<ScreenHeader title='Login to your account' text='It’s great to see you again.' />
					<View style={styles.formContainer}>
						<LoginForm />
						<DividerWithText />
						<AppButton
							title='Continue as Guest'
							variant='secondary'
							onPress={() =>
								router.replace({
									pathname: '/(app)/(tabs)/home',
									params: {
										category: 'all',
									},
								})
							}
						/>
					</View>
					<AuthPrompt text='Don’t have an account?' linkText='Join' href='/(app)/(auth)/sign-up' />
				</ScrollView>
			</AppSafeArea>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;
