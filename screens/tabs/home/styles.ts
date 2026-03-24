import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { ITEM_SPACING, LAYOUT_PADDING } from '@/constants';

const makeStyles = ({ colors, spaces }: Theme) => {
	return StyleSheet.create({
		columnWrapper: {
			gap: ITEM_SPACING,
			paddingHorizontal: LAYOUT_PADDING,
			paddingTop: ms(spaces.xxs),
		},
		contentContainer: {
			gap: ITEM_SPACING,
			paddingTop: ms(spaces.md),
			paddingBottom: ms(spaces.xl),
		},
		listHeaderContainer: {
			gap: ms(spaces.md),
			backgroundColor: colors.background,
		},
	});
};

export default makeStyles;
