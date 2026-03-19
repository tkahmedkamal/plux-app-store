import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

const makeStyles = ({ spaces }: Theme) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			gap: ms(spaces.xl),
		},
		fieldsContainer: {
			flex: 1,
			gap: ms(spaces.md),
		},
	});
};

export default makeStyles;
