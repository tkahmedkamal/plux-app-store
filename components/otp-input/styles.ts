import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms, s } from 'react-native-size-matters';

const makeStyles = ({ colors, fontSizes, fonts, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			gap: ms(spaces.md),
		},
		slotsContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			gap: ms(spaces.sm),
		},
		slot: {
			width: s(60),
			height: s(60),
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: colors.background,
			borderWidth: 1,
			borderColor: colors.border,
			borderRadius: ms(rounded.md),
		},
		slotActive: {
			borderColor: colors.primary,
		},
		slotInvalid: {
			backgroundColor: colors.destructiveOpacity,
			borderColor: colors.destructive,
		},
		char: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.xl),
			color: colors.foreground,
		},
		caretContainer: {
			position: 'absolute',
			width: '100%',
			height: '100%',
			alignItems: 'center',
			justifyContent: 'center',
		},
		caret: {
			width: ms(2),
			height: ms(28),
			backgroundColor: colors.primary,
			borderRadius: ms(1),
		},
		errorMessage: {
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.sm),
			color: colors.destructive,
		},
		resendText: {
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.sm),
			color: colors.mutedForeground,
		},
		resendBtn: {
			fontFamily: fonts.semiBold,
			color: colors.primary,
		},
		resendDisabled: {
			color: colors.mutedForeground,
		},
		time: {
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.sm),
			color: colors.mutedForeground,
		},
		timeValue: {
			fontFamily: fonts.semiBold,
			color: colors.primary,
		},
	});
};

export default makeStyles;

export type OTPInputStyles = ReturnType<typeof makeStyles>;
