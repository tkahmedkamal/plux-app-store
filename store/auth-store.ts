import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import zustandStore from './storage';

type UserState = User | null;
type AccessTokenState = string | null;

interface InitialState {
	user: UserState;
	accessToken: AccessTokenState;
	setUser: (user: UserState) => void;
	setAccessToken: (accessToken: AccessTokenState) => void;
	clearAuth: () => void;
}

const useAuthStore = create<InitialState>()(
	persist(
		(set) => ({
			user: null as UserState,
			accessToken: null as AccessTokenState,

			setUser: (user: UserState) => set({ user }),
			setAccessToken: (accessToken: AccessTokenState) => set({ accessToken }),
			clearAuth: () => set({ user: null, accessToken: null }),
		}),
		{
			name: 'auth',
			storage: createJSONStorage(() => zustandStore),
		}
	)
);

export default useAuthStore;
