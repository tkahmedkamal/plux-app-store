import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { INITIAL_FILTERS } from '@/constants';

import zustandStore from './storage';

interface Filters {
	sort: string;
	price: Price;
}

interface InitialState {
	filters: Filters;
	setFilters: (filters: Filters) => void;
}

const useFilterStore = create<InitialState>()(
	persist(
		(set) => ({
			filters: INITIAL_FILTERS,
			setFilters: (filters) => set({ filters }),
		}),
		{
			name: 'filters',
			storage: createJSONStorage(() => zustandStore),
		}
	)
);

export default useFilterStore;
