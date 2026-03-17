import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces }: Theme) => {
	return StyleSheet.create({
		container: {
			gap: ms(spaces.xxs),
		},
		title: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.xxl),
			letterSpacing: -2,
		},
		text: {
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.base),
			color: colors.mutedForeground,
		},
	});
};

export default makeStyles;
