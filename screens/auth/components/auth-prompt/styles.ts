import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces }: Theme) => {
	return StyleSheet.create({
		text: {
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.sm),
			lineHeight: ms(spaces.lg),
			color: colors.mutedForeground,
			textAlign: 'center',
		},
		link: {
			color: colors.primary,
			fontFamily: fonts.semiBold,
		},
	});
};

export default makeStyles;
