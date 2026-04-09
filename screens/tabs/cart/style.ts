import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { LAYOUT_PADDING } from '@/constants';

const makeStyles = ({ colors, fontSizes, spaces }: Theme) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			gap: ms(spaces.md),
			paddingHorizontal: LAYOUT_PADDING,
			paddingBottom: ms(spaces.lg),
		},
		contentContainer: {
			gap: ms(spaces.md),
			paddingBottom: ms(spaces.lg),
		},
		emptyContentContainer: {
			flex: 1,
		},
		listFooterComponent: {
			marginTop: ms(spaces.xs),
		},
		checkoutButtonIcon: {
			fontSize: ms(fontSizes.xl),
			color: colors.primaryForeground,
		},
		footerContainer: {
			gap: ms(spaces.md),
		},
	});
};

export default makeStyles;
