import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces }: Theme) => {
	return StyleSheet.create({
		container: {
			gap: ms(spaces.md),
		},
		itemContainer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		ItemText: {
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.sm),
			color: colors.mutedForeground,
		},
		itemValue: {
			fontFamily: fonts.medium,
			fontSize: ms(fontSizes.sm),
			color: colors.foreground,
		},
	});
};

export default makeStyles;
