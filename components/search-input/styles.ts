import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fontSizes, fonts, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			backgroundColor: colors.input,
			height: ms(52),
			borderRadius: ms(rounded.md),
			borderWidth: 1,
			borderColor: colors.border,
			overflow: 'hidden',
		},
		input: {
			height: '100%',
			paddingLeft: ms(spaces.md),
			color: colors.foreground,
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.base),
			flex: 1,
		},
		icon: {
			fontSize: ms(fontSizes.lg),
			marginLeft: ms(spaces.md),
			color: colors.mutedForeground,
		},
		borderFocused: {
			borderColor: colors.primary,
		},
	});
};

export default makeStyles;
