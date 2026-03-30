import { useCallback, useState } from 'react';

import { storage } from '@/store/storage';

const useSearchHistory = () => {
	const [history, setHistory] = useState<string[]>(() => {
		const rawData = storage.getString('search-history');
		return rawData ? JSON.parse(rawData) : [];
	});

	const saveToHistory = useCallback((term: string) => {
		const cleanTerm = term?.trim();

		if (!cleanTerm) {
			return;
		}

		setHistory((prev) => {
			const newHistory = [cleanTerm, ...prev.filter((item) => item !== cleanTerm).slice(0, 9)];

			storage.set('search-history', JSON.stringify(newHistory));
			return newHistory;
		});
	}, []);

	const removeFromHistory = useCallback((term: string) => {
		setHistory((prev) => {
			const newHistory = prev.filter((item) => item !== term);

			storage.set('search-history', JSON.stringify(newHistory));
			return newHistory;
		});
	}, []);

	const clearHistory = () => {
		setHistory([]);
		storage.remove('search-history');
	};

	return {
		history,
		saveToHistory,
		removeFromHistory,
		clearHistory,
	};
};

export default useSearchHistory;
