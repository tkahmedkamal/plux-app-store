import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';

import { useTheme } from '@/hooks';

import AppButton from '../app-button';

import makeStyles from './styles';

const BackButton = () => {
	const { back } = useRouter();
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<AppButton
			size='icon'
			variant='ghost'
			style={styles.button}
			onPress={back}
			iconAfter={<Ionicons name='arrow-back-outline' style={styles.icon} />}
		/>
	);
};

export default BackButton;
