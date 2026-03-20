import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		backdrop: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			paddingHorizontal: ms(spaces.xl),
			backgroundColor: colors.backdrop,
		},
		modalCard: {
			width: '100%',
			alignItems: 'center',
			gap: ms(spaces.xl),
			padding: ms(spaces.xl),
			backgroundColor: colors.modal,
			borderRadius: ms(rounded.lg),
		},
		content: {
			gap: ms(spaces.sm),
			alignItems: 'center',
		},
		textContainer: {
			alignItems: 'center',
			gap: ms(spaces.xs),
		},
		title: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.lg),
			color: colors.foreground,
			textAlign: 'center',
		},
		description: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.base),
			color: colors.mutedForeground,
			textAlign: 'center',
			lineHeight: ms(22),
		},
		footer: {
			width: '100%',
			gap: ms(spaces.sm),
		},
	});
};

export default makeStyles;
