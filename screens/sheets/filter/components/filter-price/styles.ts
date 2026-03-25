import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { LAYOUT_PADDING } from '@/constants';

const makeStyles = ({ colors, fonts, fontSizes, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			gap: ms(spaces.sm),
			paddingHorizontal: LAYOUT_PADDING,
		},
		header: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			gap: ms(spaces.xs),
		},
		title: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.base),
			color: colors.foreground,
		},
		range: {
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.sm),
			color: colors.mutedForeground,
		},
		thumb: {
			width: 20,
			height: 20,
			backgroundColor: colors.foreground,
			borderRadius: rounded.full,
		},
		rail: {
			flex: 1,
			height: ms(4),
			backgroundColor: colors.muted,
			borderRadius: ms(rounded.sm),
		},
		railSelected: {
			height: ms(4),
			backgroundColor: colors.primary,
		},
	});
};

export default makeStyles;
