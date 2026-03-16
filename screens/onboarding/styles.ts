import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms, s, vs } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces }: Theme) => {
	return StyleSheet.create({
		text: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.xxxl),
			paddingTop: vs(spaces.lg),
			paddingHorizontal: s(spaces.lg),
			color: colors.foreground,
			flex: 1,
			lineHeight: vs(41),
			letterSpacing: -3,
			includeFontPadding: false,
		},
		linesImageContainer: {
			position: 'absolute',
			top: vs(210),
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
			top: vs(80),
		},
		actionContainer: {
			backgroundColor: colors.background,
			paddingTop: vs(spaces.lg),
			paddingHorizontal: s(spaces.lg),
			borderTopWidth: 1,
			borderTopColor: colors.border,
		},
	});
};

export default makeStyles;
