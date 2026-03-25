import type { StyleProp, ViewStyle } from 'react-native';

import React, { useMemo } from 'react';
import { View } from 'react-native';

import { useTheme } from '@/hooks';

import makeStyles from './styles';

interface DividerProps {
	style?: StyleProp<ViewStyle>;
}

const Divider = ({ style }: DividerProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return <View style={[styles.container, style]} />;
};

export default Divider;
