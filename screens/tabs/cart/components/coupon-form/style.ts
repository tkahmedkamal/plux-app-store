import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ colors, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: ms(spaces.xs),
			padding: ms(spaces.md),
			backgroundColor: colors.card,
			borderRadius: ms(rounded.md),
		},
	});
};

export default makeStyles;
