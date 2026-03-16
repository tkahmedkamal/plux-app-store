import type { rootTheme } from '@/constants/themes';

import { useContext } from 'react';

import { ThemeContext } from '@/providers/theme-provider';

const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw Error('useTheme must be used within a ThemeProvider');
	}

	return context;
};

export default useTheme;

export type Theme = typeof rootTheme;
