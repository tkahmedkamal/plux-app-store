import { create } from 'zustand';

type EmailState = string | null;
type PasswordResetTokenState = string | null;

interface InitialState {
	email: EmailState;
	setEmail: (email: EmailState) => void;
	passwordResetToken: PasswordResetTokenState;
	setPasswordResetToken: (value: PasswordResetTokenState) => void;
}

const useAuthFlowStore = create<InitialState>()((set) => ({
	email: null,
	passwordResetToken: null,

	setEmail: (email) => set({ email }),
	setPasswordResetToken: (value) => set({ passwordResetToken: value }),
}));

export default useAuthFlowStore;
