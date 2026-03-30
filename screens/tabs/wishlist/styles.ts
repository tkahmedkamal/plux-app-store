import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { ITEM_SPACING, LAYOUT_PADDING } from '@/constants';

const makeStyles = ({ spaces }: Theme) => {
	return StyleSheet.create({
		columnWrapper: {
			gap: ITEM_SPACING,
			paddingHorizontal: LAYOUT_PADDING,
		},
		contentContainer: {
			gap: ITEM_SPACING,
			paddingBottom: ms(spaces.xl),
		},
	});
};

export default makeStyles;
