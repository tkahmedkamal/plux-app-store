import type { StyleProp, ViewStyle } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useMemo } from 'react';

import { useTheme } from '@/hooks';

import AppButton from '../app-button';

import makeStyles from './styles';

interface WishlistButtonProps {
	style?: StyleProp<ViewStyle>;
	onPress: () => void;
}

const WIshlistButton = ({ style, onPress }: WishlistButtonProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<AppButton
			variant='secondary'
			size='icon'
			iconAfter={<FontAwesome name='heart-o' style={styles.icon} />}
			onPress={onPress}
			style={[styles.container, style]}
		/>
	);
};

export default WIshlistButton;
