import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';

import { AppButton } from '@/components';
import { useTheme } from '@/hooks';

import makeStyles from './style';

interface RecentItemProps {
	text: string;
	onPress: () => void;
	onRemove: () => void;
}

const SearchHistoryItem = ({ text, onPress, onRemove }: RecentItemProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<View style={styles.container}>
			<Pressable onPress={onPress}>
				<Text style={styles.text}>{text}</Text>
			</Pressable>
			<AppButton
				size='icon'
				variant='ghost'
				iconAfter={<Ionicons name='close-circle-outline' style={styles.icon} />}
				style={styles.button}
				onPress={onRemove}
			/>
		</View>
	);
};

export default SearchHistoryItem;
