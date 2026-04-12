import type { GetCategoriesApiResponse } from '@/contact/category/get-categories-contract';

import { api, apiRoutes } from '@/config';
import { catchApiError } from '@/utils';

export const getCategoriesApi = async (): Promise<GetCategoriesApiResponse> => {
	try {
		const response = await api.get(apiRoutes.getCategories);
		return response.data as GetCategoriesApiResponse;
	} catch (error: unknown) {
		throw catchApiError(error);
	}
};
