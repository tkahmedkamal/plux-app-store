import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { LAYOUT_PADDING } from '@/constants';

const makeStyles = ({ colors, fonts, fontSizes, spaces }: Theme) => {
	return StyleSheet.create({
		container: {
			gap: ms(spaces.sm),
		},
		title: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.base),
			color: colors.foreground,
			paddingHorizontal: LAYOUT_PADDING,
		},
		options: {
			flexDirection: 'row',
			flexWrap: 'wrap',
			gap: ms(spaces.xs),
			paddingLeft: LAYOUT_PADDING,
		},
	});
};

export default makeStyles;
