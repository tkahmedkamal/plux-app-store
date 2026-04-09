declare module '*.ttf';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

interface Children {
	children: React.ReactNode;
}

interface BaseResponse {
	success: string;
	status: number;
}

interface Meta {
	page: number;
	limit: number;
	totalItems: number;
	totalPages: number;
	hasNext: boolean;
	hasPrev: boolean;
}

interface Category {
	id: string;
	name: string;
	slug: string;
	parentId: string | null;
	image: string;
	isActive: boolean;
	order: number;
	productCount: number;
	createdAt: string;
	updatedAt: string;
}

interface ProductImage {
	url: string;
	id: string;
	_id: string;
}
interface Product {
	id: string;
	title: string;
	slug: string;
	description: string;
	price: number;
	currency: string;
	images: ProductImage[];
	stock: number;
	category: string;
	categoryId: string;
	tags: string[];
	sellerId: {
		_id: string;
		email: string;
		name: string;
	};
}
interface AuthData {
	user: User;
	accessToken: string;
	refreshToken: string;
}

interface FilterParams {
	page?: number;
	limit?: number;
	sort?: string;
	search?: string;
	category?: string;
	minPrice?: string;
	maxPrice?: string;
}

interface Price {
	min: number;
	max: number;
}
