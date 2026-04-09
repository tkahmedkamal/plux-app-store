import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces }: Theme) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			gap: ms(spaces.lg),
		},
		textContainer: {
			gap: ms(spaces.sm),
			alignItems: 'center',
		},
		title: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.lg),
			color: colors.foreground,
			textAlign: 'center',
		},
		description: {
			maxWidth: '65%',
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.sm),
			color: colors.mutedForeground,
			textAlign: 'center',
			lineHeight: ms(fontSizes.sm * 1.5),
		},
	});
};

export default makeStyles;
