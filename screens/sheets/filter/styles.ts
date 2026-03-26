import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { LAYOUT_PADDING } from '@/constants';

const makeStyles = ({ colors, fonts, fontSizes, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		safeArea: {
			paddingHorizontal: 0,
			backgroundColor: colors.modal,
		},
		container: {
			gap: ms(spaces.md),
		},
		header: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			paddingVertical: ms(spaces.sm),
			borderBottomWidth: 1,
			borderColor: colors.border,
			marginHorizontal: LAYOUT_PADDING,
		},
		headerTitle: {
			fontFamily: fonts.semiBold,
			fontSize: ms(fontSizes.lg),
			color: colors.foreground,
		},
		actionButtons: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			gap: ms(spaces.xxs),
		},
		closeBtn: {
			width: ms(40),
			height: ms(40),
			borderRadius: rounded.full,
		},
		closeIcon: {
			fontSize: ms(spaces.xl),
			color: colors.mutedForeground,
		},
		body: {
			gap: ms(spaces.md),
			overflow: 'hidden',
		},
		divider: {
			marginHorizontal: LAYOUT_PADDING,
		},
		footer: {
			marginHorizontal: LAYOUT_PADDING,
		},
	});
};

export default makeStyles;
