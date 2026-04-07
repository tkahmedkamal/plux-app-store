import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@/hooks';

import BackButton from '../back-button';

import makeStyles from './styles';

interface CustomStackHeaderProps {
	title: string;
	showBackButton?: boolean;
}

const CustomStackHeader = ({ title, showBackButton }: CustomStackHeaderProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const { top } = useSafeAreaInsets();

	return (
		<View style={[styles.container, { paddingTop: top }]}>
			{showBackButton && (
				<View style={styles.backButtonContainer}>
					<BackButton />
				</View>
			)}
			<Text style={styles.titleContainer}>{title}</Text>
			<View style={styles.actionContainer} />
		</View>
	);
};

export default CustomStackHeader;
