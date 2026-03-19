import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { useTheme } from '@/hooks';

import makeStyles from './styles';

const BackButton = () => {
	const { back } = useRouter();
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const [isPressed, setIsPressed] = useState(false);

	return (
		<TouchableOpacity
			style={[styles.button, isPressed && styles.pressed]}
			onPress={back}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			activeOpacity={1}
		>
			<Ionicons name='arrow-back-outline' style={styles.icon} />
		</TouchableOpacity>
	);
};

export default BackButton;
