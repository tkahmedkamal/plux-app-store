import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

import { LAYOUT_PADDING } from '@/constants';

const makeStyles = ({ spaces }: Theme) => {
	return StyleSheet.create({
		container: {
			gap: ms(spaces.xs),
			paddingLeft: LAYOUT_PADDING,
		},
	});
};

export default makeStyles;
