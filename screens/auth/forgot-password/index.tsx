import React, { useMemo } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

import { AppSafeArea, ScreenHeader } from '@/components';
import { keyboardBehavior } from '@/constants';
import { useTheme } from '@/hooks';

import ForgotPasswordForm from './components/forgot-password-form';
import makeStyles from './styles';

const ForgotPasswordScreen = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<KeyboardAvoidingView style={styles.container} behavior={keyboardBehavior}>
			<AppSafeArea>
				<ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
					<ScreenHeader
						title='Forgot password'
						text='Enter your email for the verification process. We will send 4 digits code to your email.'
						withBackButton
					/>
					<ForgotPasswordForm />
				</ScrollView>
			</AppSafeArea>
		</KeyboardAvoidingView>
	);
};

export default ForgotPasswordScreen;
