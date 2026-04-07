import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = (theme: Theme) => {
	return StyleSheet.create({
		container: {
			alignSelf: 'flex-start',
			paddingHorizontal: ms(theme.spaces.xs),
			paddingVertical: ms(theme.spaces.xxs),
			borderRadius: ms(theme.rounded.sm),
		},
		text: {
			fontFamily: theme.fonts.regular,
			fontSize: ms(theme.fontSizes.xs),
		},
		default: {
			backgroundColor: theme.colors.card,
		},
		success: {
			backgroundColor: theme.colors.successOpacity,
		},
		destructive: {
			backgroundColor: theme.colors.destructiveOpacity,
		},
		textDefault: {
			color: theme.colors.foreground,
		},
		textSuccess: {
			color: theme.colors.success,
		},
		textDestructive: {
			color: theme.colors.destructive,
		},
	});
};

export default makeStyles;
