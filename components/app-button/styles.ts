import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			height: ms(54),
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			gap: ms(spaces.xs),
			backgroundColor: colors.primary,
			borderRadius: ms(rounded.md),
		},
		title: {
			fontFamily: fonts.medium,
			fontSize: ms(fontSizes.base),
			color: colors.primaryForeground,
		},
		disabledButton: {
			backgroundColor: colors.muted,
		},
		disabledText: {
			color: colors.background,
		},
	});
};

export default makeStyles;
