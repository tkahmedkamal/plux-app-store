import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '@/hooks';

import makeStyles from './style';

interface BadgeProps {
	text: string;
	variant?: 'default' | 'success' | 'destructive';
}

const Badge = ({ text, variant = 'default' }: BadgeProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	const containerStyle = {
		...styles.container,
		...styles[variant],
	};

	const textVariantStyleMap = {
		default: styles.textDefault,
		success: styles.textSuccess,
		destructive: styles.textDestructive,
	};

	return (
		<View style={[containerStyle, styles[variant]]}>
			<Text style={[styles.text, textVariantStyleMap[variant]]}>{text}</Text>
		</View>
	);
};

export default Badge;
