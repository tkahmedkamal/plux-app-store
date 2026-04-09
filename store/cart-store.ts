import { create } from 'zustand';

interface CartItem extends Product {
	quantity: number;
	totalAmount: number;
}

interface InitialState {
	items: CartItem[];
	totalItems: number;
	totalAmount: number;
	addToCart: (product: Product) => void;
	removeFromCart: (product: Product) => void;
	removeItemFromCart: (productId: string) => void;
	clearCart: () => void;
}

const useCartStore = create<InitialState>((set) => ({
	items: [],
	totalAmount: 0,
	totalItems: 0,
	addToCart: (product: Product) =>
		set((state) => {
			const existingItem = state.items.some((item) => item.id === product.id);

			if (existingItem) {
				return {
					items: state.items.map((item) => {
						return item.id === product.id
							? { ...item, quantity: item.quantity + 1, totalAmount: item.totalAmount + item.price }
							: item;
					}),
					totalAmount: state.totalAmount + product.price,
					totalItems: state.totalItems + 1,
				};
			}

			return {
				items: [...state.items, { ...product, quantity: 1, totalAmount: product.price }],
				totalAmount: state.totalAmount + product.price,
				totalItems: state.totalItems + 1,
			};
		}),
	removeFromCart: (product: Product) =>
		set((state) => {
			const existingItem = state.items.find((item) => item.id === product.id);

			if (!existingItem) {
				return state;
			}

			return {
				items: state.items
					.map((item) => {
						return item.id === existingItem.id
							? {
									...item,
									quantity: item.quantity - 1,
									totalAmount: item.totalAmount - item.price,
								}
							: item;
					})
					.filter((item) => item.quantity > 0),
				totalAmount: state.totalAmount - existingItem.price,
				totalItems: state.totalItems - 1,
			};
		}),
	removeItemFromCart: (productId: string) =>
		set((state) => {
			const existingItem = state.items.find((item) => item.id === productId);

			if (!existingItem) {
				return state;
			}

			return {
				items: state.items.filter((item) => item.id !== productId),
				totalAmount: state.totalAmount - existingItem.totalAmount,
				totalItems: state.totalItems - existingItem.quantity,
			};
		}),
	clearCart: () => set({ items: [], totalAmount: 0, totalItems: 0 }),
}));

export default useCartStore;
