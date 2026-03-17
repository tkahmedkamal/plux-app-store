import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fonts, fontSizes, spaces }: Theme) => {
	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: ms(spaces.xs),
		},
		divider: {
			flex: 1,
			height: 1,
			backgroundColor: colors.border,
		},
		text: {
			fontFamily: fonts.regular,
			fontSize: ms(fontSizes.sm),
			color: colors.mutedForeground,
		},
	});
};

export default makeStyles;
