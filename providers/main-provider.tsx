import React from 'react';

import QueryClientProvider from './query-client-provider';
import ThemeProvider from './theme-provider';

const MainProvider = ({ children }: Children) => {
	return (
		<ThemeProvider>
			<QueryClientProvider>{children}</QueryClientProvider>
		</ThemeProvider>
	);
};

export default MainProvider;
