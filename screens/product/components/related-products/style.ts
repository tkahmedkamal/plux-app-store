import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { ITEM_SPACING, LAYOUT_PADDING } from '@/constants';

const makeStyles = ({ colors, fonts, fontSizes, spaces }: Theme) => {
	return StyleSheet.create({
		container: {
			paddingHorizontal: LAYOUT_PADDING,
			gap: ms(spaces.md),
		},
		contentContainer: {
			gap: ITEM_SPACING,
		},
		title: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.base),
			color: colors.foreground,
		},
	});
};

export default makeStyles;
