import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		text: {
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.base),
			color: colors.foreground,
		},
		button: {
			width: ms(32),
			height: ms(32),
			borderRadius: rounded.full,
		},
		icon: {
			fontSize: ms(fontSizes.lg),
			color: colors.mutedForeground,
		},
	});
};

export default makeStyles;
