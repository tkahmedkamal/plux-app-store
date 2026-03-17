import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { s, vs } from 'react-native-size-matters';

const makeStyles = ({ colors, spaces }: Theme) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			paddingHorizontal: s(spaces.lg),
			paddingTop: vs(spaces.sm),
			backgroundColor: colors.background,
		},
	});
};

export default makeStyles;
