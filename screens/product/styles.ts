import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { LAYOUT_PADDING } from '@/constants';

const makeStyles = (theme: Theme) => {
	return StyleSheet.create({
		container: {
			flex: 1,
		},
		scrollView: {
			flex: 1,
			backgroundColor: theme.colors.background,
		},
		contentContainer: {
			gap: ms(theme.spaces.sm),
		},
		imageContainer: {
			height: ms(340),
			marginHorizontal: LAYOUT_PADDING,
			backgroundColor: theme.colors.card,
			borderRadius: ms(theme.rounded.lg),
		},
		image: {
			width: '100%',
			height: '100%',
		},
		bodyContainer: {
			paddingHorizontal: LAYOUT_PADDING,
			gap: ms(theme.spaces.sm),
		},
		title: {
			fontFamily: theme.fonts.semiBold,
			fontSize: ms(theme.fontSizes.xl),
			color: theme.colors.foreground,
		},
		description: {
			fontFamily: theme.fonts.regular,
			fontSize: ms(theme.fontSizes.sm),
			color: theme.colors.mutedForeground,
			lineHeight: ms(theme.fontSizes.sm * 1.5),
		},
		badgesContainer: {
			flexDirection: 'row',
			gap: ms(theme.spaces.xs),
		},
		footerContainer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			paddingVertical: ms(theme.spaces.xl),
			paddingHorizontal: LAYOUT_PADDING,
			backgroundColor: theme.colors.background,
			borderTopWidth: 1,
			borderColor: theme.colors.border,
		},
		priceContainer: {
			gap: ms(theme.spaces.xxs),
		},
		priceLabel: {
			fontSize: theme.fontSizes.base,
			fontFamily: theme.fonts.regular,
			color: theme.colors.mutedForeground,
		},
		priceValue: {
			fontSize: theme.fontSizes.xl,
			fontFamily: theme.fonts.semiBold,
			color: theme.colors.foreground,
		},
	});
};

export default makeStyles;
