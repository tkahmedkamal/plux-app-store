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

	const textStyle = {
		...styles.text,
		...styles[`text${variant.charAt(0).toUpperCase()}${variant.slice(1)}` as keyof typeof styles],
	};

	return (
		<View style={containerStyle}>
			<Text style={textStyle}>{text}</Text>
		</View>
	);
};

export default Badge;
