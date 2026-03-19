import type { StyleProp, TextStyle } from 'react-native';

import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '@/hooks';

import { BackButton } from '..';

import makeStyles from './styles';

interface ScreenHeaderProps {
	title: string;
	text?: string;
	suffix?: string;
	withBackButton?: boolean;
	titleStyle?: StyleProp<TextStyle>;
	textStyle?: StyleProp<TextStyle>;
}

const ScreenHeader = ({
	title,
	text,
	suffix,
	withBackButton,
	titleStyle,
	textStyle,
}: ScreenHeaderProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<View style={styles.container}>
			{withBackButton && <BackButton />}
			<View style={styles.textContainer}>
				<Text style={[styles.title, titleStyle]}>{title}</Text>
				{text && (
					<Text style={[styles.text, textStyle]}>
						{text}
						{suffix && <Text style={styles.suffix}>{suffix}</Text>}
					</Text>
				)}
			</View>
		</View>
	);
};

export default ScreenHeader;
