import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { LAYOUT_PADDING } from '@/constants';

const makeStyles = ({ colors, fonts, fontSizes, spaces }: Theme) => {
	return StyleSheet.create({
		container: {
			flexGrow: 1,
			paddingBottom: ms(spaces.xl),
		},
		itemWrapper: {
			paddingHorizontal: LAYOUT_PADDING,
		},
		divider: {
			marginVertical: ms(spaces.xs),
			marginHorizontal: LAYOUT_PADDING,
		},
		listHeader: {
			gap: ms(spaces.md),
			paddingBottom: ms(spaces.lg),
			backgroundColor: colors.background,
			paddingHorizontal: LAYOUT_PADDING,
		},
		titleBar: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		sectionTitle: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.base),
			color: colors.foreground,
		},
		clearButtonText: {
			fontSize: ms(fontSizes.sm),
			textDecorationLine: 'underline',
		},
	});
};

export default makeStyles;
