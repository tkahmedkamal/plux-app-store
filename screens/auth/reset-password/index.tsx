import React, { useMemo } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

import { AppSafeArea, ScreenHeader } from '@/components';
import { keyboardBehavior } from '@/constants';
import { useTheme } from '@/hooks';

import { ResetPasswordForm } from './components';
import makeStyles from './styles';

const ResetPasswordScreen = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<KeyboardAvoidingView style={styles.container} behavior={keyboardBehavior}>
			<AppSafeArea>
				<ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
					<ScreenHeader
						title='Reset password'
						text='Set the new password for your account so you can login and access all the features.'
						withBackButton
					/>
					<ResetPasswordForm />
				</ScrollView>
			</AppSafeArea>
		</KeyboardAvoidingView>
	);
};

export default ResetPasswordScreen;
