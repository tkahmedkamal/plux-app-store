import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fontSizes, fonts, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			gap: ms(spaces.xs),
		},
		label: {
			fontFamily: fonts.medium,
			fontSize: ms(fontSizes.sm),
			color: colors.foreground,
		},
		fieldContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			backgroundColor: colors.background,
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
			marginRight: ms(spaces.md),
		},
		errorMessage: {
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.sm),
			color: colors.destructive,
		},
		borderFocused: {
			borderColor: colors.primary,
		},
		borderInvalid: {
			borderColor: colors.destructive,
		},
		borderValid: {
			borderColor: colors.success,
		},
	});
};

export default makeStyles;
