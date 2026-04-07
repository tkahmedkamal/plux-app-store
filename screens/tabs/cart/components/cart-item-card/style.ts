import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			padding: ms(spaces.sm),
			backgroundColor: colors.background,
			borderRadius: ms(rounded.md),
			borderWidth: 1,
			borderColor: colors.border,
			gap: ms(spaces.md),
		},
		imageContainer: {
			width: ms(84),
			height: ms(84),
			backgroundColor: colors.card,
			borderRadius: ms(rounded.sm),
			overflow: 'hidden',
		},
		image: {
			width: '100%',
			height: '100%',
		},
		infoContainer: {
			flex: 1,
			justifyContent: 'space-between',
		},
		infoTitleContainer: {
			gap: ms(spaces.xxs),
		},
		title: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.sm),
			color: colors.foreground,
		},
		itemsText: {
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.xs),
			color: colors.mutedForeground,
		},
		price: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.sm),
			color: colors.foreground,
		},
		actionsContainer: {
			justifyContent: 'space-between',
		},
		quantityContainer: {
			flexDirection: 'row',
			alignItems: 'center',
		},
		deleteButton: {
			width: ms(24),
			height: ms(24),
			alignSelf: 'flex-end',
			borderRadius: ms(rounded.full),
		},
		deleteButtonIcon: {
			fontSize: ms(fontSizes.base),
			color: colors.destructive,
		},
		quantityButton: {
			width: ms(24),
			height: ms(24),
		},
		quantityButtonIcon: {
			fontSize: ms(fontSizes.sm),
			color: colors.foreground,
		},
		quantityText: {
			width: ms(24),
			textAlign: 'center',
			fontFamily: fonts.medium,
			fontSize: ms(fontSizes.sm),
			color: colors.foreground,
		},
	});
};

export default makeStyles;
