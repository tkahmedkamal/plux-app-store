import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { LAYOUT_PADDING } from '@/constants';

const makeStyles = ({ fontSizes, spaces, colors }: Theme) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: 'row',
			gap: ms(spaces.xs),
			paddingHorizontal: LAYOUT_PADDING,
		},
		icon: {
			fontSize: ms(fontSizes.lg),
			color: colors.secondaryForeground,
		},
	});
};

export default makeStyles;
