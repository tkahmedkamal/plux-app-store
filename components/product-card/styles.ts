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
		},
		wishlist: {
			position: 'absolute',
			top: ms(spaces.sm),
			right: ms(spaces.sm),
			width: ms(35),
			height: ms(35),
			borderRadius: ms(rounded.sm),
			backgroundColor: colors.background,
			alignItems: 'center',
			justifyContent: 'center',
			zIndex: 1,
			shadowColor: colors.background,
			shadowOffset: { width: 0, height: ms(2) },
			shadowOpacity: 0.22,
			shadowRadius: ms(rounded.sm),
			elevation: 4,
		},
		wishlistIcon: {
			fontSize: ms(fontSizes.base),
			color: colors.foreground,
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
