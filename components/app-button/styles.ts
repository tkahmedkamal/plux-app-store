import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			gap: ms(spaces.xs),
			borderWidth: 1,
			borderColor: 'transparent',
			borderRadius: ms(rounded.md),
			paddingHorizontal: ms(spaces.md),
		},
		lg: {
			height: ms(54),
		},
		md: {
			height: ms(36),
		},
		sm: {
			height: ms(30),
			borderRadius: ms(rounded.sm),
		},
		icon: {
			width: ms(52),
			height: ms(52),
			paddingHorizontal: 0,
		},
		primary: {
			backgroundColor: colors.primary,
		},
		secondary: {
			backgroundColor: colors.secondary,
		},
		outline: {
			backgroundColor: 'transparent',
			borderColor: colors.border,
		},
		ghost: {
			backgroundColor: 'transparent',
		},
		title: {
			fontFamily: fonts.medium,
			fontSize: ms(fontSizes.base),
			color: colors.primaryForeground,
		},
		pressedOpacity: {
			opacity: 0.7,
		},
		pressedGhost: {
			backgroundColor: colors.muted,
		},
		scale: {
			transform: [
				{
					scale: 0.98,
				},
			],
		},
		disabledButton: {
			backgroundColor: colors.muted,
			opacity: 0.5,
		},
		disabledText: {
			color: colors.mutedForeground,
		},
	});
};

export default makeStyles;
