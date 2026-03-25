import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import zustandStore from './storage';

interface Price {
	minPrice: number;
	maxPrice: number;
}

interface InitialState {
	sort: string;
	price: Price;
	setSort: (value: string) => void;
	setPrice: (price: Price) => void;
}

const useFilterStore = create<InitialState>()(
	persist(
		(set) => ({
			sort: 'default',
			price: {
				minPrice: 1,
				maxPrice: 20,
			},
			setSort: (value) => set({ sort: value }),
			setPrice: (price) => set({ price: price }),
		}),
		{
			name: 'filters',
			storage: createJSONStorage(() => zustandStore),
		}
	)
);

export default useFilterStore;
