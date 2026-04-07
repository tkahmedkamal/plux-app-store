import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces }: Theme) => {
	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			height: ms(120),
			paddingHorizontal: ms(spaces.md),
			backgroundColor: colors.background,
		},
		backButtonContainer: {
			flex: 1,
		},
		titleContainer: {
			textAlign: 'center',
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.lg),
			color: colors.foreground,
		},
		actionContainer: {
			flex: 1,
		},
	});
};

export default makeStyles;
