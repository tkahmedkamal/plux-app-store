import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = (theme: Theme) => {
	return StyleSheet.create({
		icon: {
			fontSize: ms(theme.fontSizes.xl),
			color: theme.colors.primaryForeground,
		},
	});
};

export default makeStyles;
