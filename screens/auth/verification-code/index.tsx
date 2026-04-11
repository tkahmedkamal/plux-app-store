import { useLocalSearchParams } from 'expo-router';
import React, { useMemo } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

import { AppSafeArea, ScreenHeader } from '@/components';
import { keyboardBehavior } from '@/constants';
import { useTheme } from '@/hooks';

import { VerificationCodeForm } from './components';
import makeStyles from './styles';

const VerificationCodeScreen = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const { email } = useLocalSearchParams<{ email: string }>();

	return (
		<KeyboardAvoidingView style={styles.container} behavior={keyboardBehavior}>
			<AppSafeArea>
				<ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
					<ScreenHeader
						title='Enter 4 Digit Code'
						text='Enter 4 digit code that your receive on your email '
						suffix={email}
						withBackButton
					/>
					<VerificationCodeForm />
				</ScrollView>
			</AppSafeArea>
		</KeyboardAvoidingView>
	);
};

export default VerificationCodeScreen;
