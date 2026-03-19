import React, { useMemo } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';

import { AppButton, AppSafeArea, DividerWithText, ScreenHeader } from '@/components';
import { keyboardBehavior } from '@/constants';
import { useTheme } from '@/hooks';

import { AuthPrompt } from '../components';

import { SignupForm } from './components';
import makeStyles from './styles';

const SignupScreen = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<KeyboardAvoidingView style={styles.container} behavior={keyboardBehavior}>
			<AppSafeArea>
				<ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
					<ScreenHeader title='Create an account' text='Let’s create your account.' />
					<View style={styles.formContainer}>
						<SignupForm />
						<DividerWithText />
						<AppButton title='Continue as Guest' variant='secondary' />
					</View>
					<AuthPrompt
						text='Already have an account?'
						linkText='Log In'
						href='/(app)/(auth)/log-in'
					/>
				</ScrollView>
			</AppSafeArea>
		</KeyboardAvoidingView>
	);
};

export default SignupScreen;
