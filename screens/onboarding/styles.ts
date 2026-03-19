import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces }: Theme) => {
	return StyleSheet.create({
		text: {
			flex: 1,
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.xxxl),
			paddingTop: vs(spaces.lg),
			paddingHorizontal: ms(spaces.lg),
			color: colors.foreground,
			lineHeight: ms(52),
			letterSpacing: -3,
			includeFontPadding: false,
		},
		linesImageContainer: {
			position: 'absolute',
			top: vs(240),
			right: 0,
			left: 0,
			height: vs(236),
			overflow: 'hidden',
		},
		linesImage: {
			width: '100%',
			height: '100%',
		},
		image: {
			position: 'absolute',
			right: 0,
			top: vs(48),
		},
		actionContainer: {
			backgroundColor: colors.background,
			paddingTop: ms(spaces.xl),
			paddingHorizontal: ms(spaces.lg),
			borderTopWidth: 1,
			borderTopColor: colors.border,
		},
	});
};

export default makeStyles;
