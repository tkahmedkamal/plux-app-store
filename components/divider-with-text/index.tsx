import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '@/hooks';

import makeStyles from './styles';

interface DividerWithTextProps {
	text?: string;
}

const DividerWithText = ({ text = 'Or' }: DividerWithTextProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<View style={styles.container}>
			<View style={styles.divider} />
			<Text style={styles.text}>{text}</Text>
			<View style={styles.divider} />
		</View>
	);
};

export default DividerWithText;
