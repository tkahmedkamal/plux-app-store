import type { Theme } from '@/hooks/use-theme';

import { Dimensions, StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { ITEM_SPACING, LAYOUT_PADDING } from '@/constants';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - LAYOUT_PADDING * 2 - ITEM_SPACING) / 2;

const makeStyles = ({ colors, fonts, fontSizes, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			width: ITEM_WIDTH,
			gap: ms(spaces.xs),
		},
		imageContainer: {
			width: '100%',
			height: ms(180),
			backgroundColor: colors.card,
			borderRadius: rounded.md,
			overflow: 'hidden',
		},
		image: {
			width: '100%',
			height: '100%',
		},
		bodyContainer: {
			gap: ms(spaces.xxs),
		},
		title: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.sm),
			color: colors.foreground,
		},
		price: {
			fontFamily: fonts.medium,
			fontSize: ms(fontSizes.xs),
			color: colors.mutedForeground,
		},
	});
};

export default makeStyles;
