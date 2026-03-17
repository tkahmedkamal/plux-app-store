import type { StyleProp, TextStyle } from 'react-native';

import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '@/hooks';

import makeStyles from './styles';

interface ScreenHeaderProps {
	title: string;
	text?: string;
	titleStyle?: StyleProp<TextStyle>;
	textStyle?: StyleProp<TextStyle>;
}

const ScreenHeader = ({ title, text, titleStyle, textStyle }: ScreenHeaderProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<View style={styles.container}>
			<Text style={[styles.title, titleStyle]}>{title}</Text>
			{text && <Text style={[styles.text, textStyle]}>{text}</Text>}
		</View>
	);
};

export default ScreenHeader;
