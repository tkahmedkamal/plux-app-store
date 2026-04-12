import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { LAYOUT_PADDING } from '@/constants';

const makeStyles = ({ colors, rounded, spaces }: Theme) => {
	return StyleSheet.create({
		container: {
			gap: ms(spaces.xs),
			paddingLeft: LAYOUT_PADDING,
		},
		skeletonContainer: {
			flexDirection: 'row',
			gap: ms(spaces.xs),
			paddingLeft: LAYOUT_PADDING,
		},
		skeletonItem: {
			flex: 1,
			height: ms(36),
			paddingHorizontal: ms(spaces.md),
			borderRadius: ms(rounded.md),
			backgroundColor: colors.card,
		},
	});
};

export default makeStyles;
