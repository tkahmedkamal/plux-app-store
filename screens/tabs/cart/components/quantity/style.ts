import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes }: Theme) => {
	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
		},
		button: {
			width: ms(24),
			height: ms(24),
		},
		icon: {
			fontSize: ms(fontSizes.sm),
			color: colors.foreground,
		},
		text: {
			width: ms(24),
			textAlign: 'center',
			fontFamily: fonts.medium,
			fontSize: ms(fontSizes.sm),
			color: colors.foreground,
		},
	});
};

export default makeStyles;
