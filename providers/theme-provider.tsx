import React, { createContext } from 'react';

import { rootTheme } from '@/constants/themes';

type Theme = typeof rootTheme;

export const ThemeContext = createContext<Theme>({} as Theme);

const ThemeProvider = ({ children }: Children) => {
	return <ThemeContext.Provider value={rootTheme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
