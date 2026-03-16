import type { Theme } from '@/hooks/use-theme';

import React, { createContext } from 'react';

import { rootTheme } from '@/constants/themes';

export const ThemeContext = createContext<Theme>({} as Theme);

const ThemeProvider = ({ children }: Children) => {
	return <ThemeContext.Provider value={rootTheme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
