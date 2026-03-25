import type { Theme } from '@/hooks/use-theme';

import { StyleSheet } from 'react-native';

const makeStyles = ({ colors, fonts, fontSizes, spaces, rounded }: Theme) => {
	return StyleSheet.create({
		container: {
			borderTopWidth: 1,
			borderColor: colors.border,
		},
	});
};

export default makeStyles;
