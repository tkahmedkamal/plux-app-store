import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			gap: ms(spaces.xs),
		},
		trigger: {
			justifyContent: 'flex-start',
			backgroundColor: colors.input,
			borderColor: colors.border,
		},
		triggerText: {
			color: colors.mutedForeground,
		},
		triggerError: {
			borderColor: colors.destructive,
			backgroundColor: colors.destructiveOpacity,
		},
		errorText: {
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.sm),
			color: colors.destructive,
		},
		modal: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'flex-end',
			backgroundColor: colors.backdrop,
		},
		modalContainer: {
			position: 'relative',
			width: '100%',
			alignItems: 'center',
			backgroundColor: colors.background,
			paddingVertical: ms(spaces.sm),
			paddingHorizontal: ms(spaces.xl),
			borderRadius: ms(rounded.lg),
		},
		header: {
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			borderBottomWidth: 1,
			borderColor: colors.border,
			paddingBottom: ms(spaces.md),
		},
		title: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.lg),
			color: colors.foreground,
		},
		close: {
			width: ms(40),
			height: ms(40),
			borderRadius: rounded.full,
		},
		closeIcon: {
			fontSize: ms(fontSizes.xl),
			color: colors.foreground,
		},
		picker: {
			width: '100%',
		},
		pickerItem: {
			fontFamily: fonts.regular,
			height: vs(130),
		},
	});
};

export default makeStyles;
