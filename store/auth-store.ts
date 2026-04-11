import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import zustandStore from './storage';

type UserState = User | null;
type AccessTokenState = string | null;

interface InitialState {
	user: UserState;
	accessToken: AccessTokenState;
	handlingUnauthorized: boolean;
	setUser: (user: UserState) => void;
	setAccessToken: (accessToken: AccessTokenState) => void;
	setHandlingUnauthorized: (value: boolean) => void;
	clearAuth: () => void;
}

const useAuthStore = create<InitialState>()(
	persist(
		(set): InitialState => ({
			user: null,
			accessToken: null,
			handlingUnauthorized: false,

			setUser: (user) => set({ user }),
			setAccessToken: (accessToken) => set({ accessToken }),
			setHandlingUnauthorized: (value) => set({ handlingUnauthorized: value }),
			clearAuth: () => set({ user: null, accessToken: null, handlingUnauthorized: false }),
		}),
		{
			name: 'auth',
			storage: createJSONStorage(() => zustandStore),
		}
	)
);

export default useAuthStore;
