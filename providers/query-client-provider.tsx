import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const QCProvider = ({ children }: Children) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 24 * 60 * 60 * 1000,
				refetchOnWindowFocus: false,
				retry: false,
			},
		},
	});

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QCProvider;
