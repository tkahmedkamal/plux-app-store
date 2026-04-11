import { create } from 'zustand';

type EmailState = string | null;

interface InitialState {
	email: EmailState;
	setEmail: (email: EmailState) => void;
}

const useAuthFlowStore = create<InitialState>()((set) => ({
	email: null,
	setEmail: (email) => set({ email }),
}));

export default useAuthFlowStore;
