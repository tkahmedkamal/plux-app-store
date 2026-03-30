import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		content: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: ms(spaces.sm),
		},
		imageContainer: {
			width: ms(56),
			height: ms(56),
			borderRadius: ms(rounded.sm),
			backgroundColor: colors.card,
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
		icon: {
			fontSize: ms(fontSizes.lg),
			color: colors.foreground,
		},
	});
};

export default makeStyles;
