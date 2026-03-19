import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fontSizes, rounded }: Theme) => {
	return StyleSheet.create({
		button: {
			backgroundColor: colors.background,
			width: ms(40),
			height: ms(40),
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: rounded.full,
		},
		icon: {
			color: colors.foreground,
			fontSize: ms(fontSizes.xl),
		},
		pressed: {
			backgroundColor: colors.muted,
		},
	});
};

export default makeStyles;

export type OTPInputStyles = ReturnType<typeof makeStyles>;
