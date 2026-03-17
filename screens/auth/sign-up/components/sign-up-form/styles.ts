import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces }: Theme) => {
	return StyleSheet.create({
		container: {
			gap: ms(spaces.xl),
		},
		fieldsContainer: {
			gap: ms(spaces.md),
		},
		text: {
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.sm),
			color: colors.foreground,
			lineHeight: ms(spaces.lg),
		},
		link: {
			fontFamily: fonts.semiBold,
		},
	});
};

export default makeStyles;
