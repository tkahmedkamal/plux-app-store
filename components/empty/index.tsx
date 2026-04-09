import type { ReactNode } from 'react';

import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '@/hooks';

import makeStyles from './style';

interface EmptyProps {
	title: string;
	description?: string;
	icon?: ReactNode;
}

const Empty = ({ title, description, icon }: EmptyProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<View style={styles.container}>
			{icon}
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.description}>{description}</Text>
			</View>
		</View>
	);
};

export default Empty;
