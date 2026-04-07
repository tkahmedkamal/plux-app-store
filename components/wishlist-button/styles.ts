import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, fontSizes, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			position: 'absolute',
			top: ms(spaces.sm),
			right: ms(spaces.sm),
			width: ms(35),
			height: ms(35),
			borderRadius: ms(rounded.sm),
			backgroundColor: colors.background,
			alignItems: 'center',
			justifyContent: 'center',
			zIndex: 1,
			shadowColor: colors.background,
			shadowOffset: { width: 0, height: ms(2) },
			shadowOpacity: 0.22,
			shadowRadius: ms(rounded.sm),
			elevation: 4,
		},
		icon: {
			fontSize: ms(fontSizes.base),
			color: colors.foreground,
		},
	});
};

export default makeStyles;
