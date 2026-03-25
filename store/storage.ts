import type { StateStorage } from 'zustand/middleware';

import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV();

const zustandStore: StateStorage = {
	getItem: async (name: string): Promise<string | null> => {
		return storage.getString(name) ?? null;
	},
	setItem: async (name: string, value: string): Promise<void> => {
		storage.set(name, value);
	},
	removeItem: async (name: string): Promise<void> => {
		storage.remove(name);
	},
};

export default zustandStore;
