import type { StyleProp, ViewStyle } from 'react-native';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';

import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { s } from 'react-native-size-matters';

import { useTheme } from '@/hooks';

import makeStyles from './styles';

interface AppSafeAreaProps extends SafeAreaViewProps {
	style?: StyleProp<ViewStyle>;
	withoutPadding?: boolean;
}

const AppSafeArea = ({ style, withoutPadding, children }: AppSafeAreaProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<SafeAreaView style={[styles.container, withoutPadding && { paddingHorizontal: s(0) }, style]}>
			{children}
		</SafeAreaView>
	);
};
export default AppSafeArea;
