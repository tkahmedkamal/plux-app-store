import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { s } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			height: 54,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			gap: s(spaces.xs),
			backgroundColor: colors.primary,
			borderRadius: s(rounded.md),
		},
		title: {
			fontFamily: fonts.medium,
			fontSize: fontSizes.base,
			color: colors.primaryForeground,
		},
		disabledButton: {
			backgroundColor: colors.muted,
		},
		disabledText: {
			color: colors.mutedForeground,
		},
	});
};

export default makeStyles;
