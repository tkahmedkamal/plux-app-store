import { Platform } from 'react-native';
import { ms } from 'react-native-size-matters';

import { rootTheme } from './themes';

export const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : 'height';

export const ITEM_SPACING = ms(rootTheme.spaces.lg);
export const LAYOUT_PADDING = ms(rootTheme.spaces.xl);

export const SORT_OPTIONS = [
	{
		id: 'relevance',
		label: 'Relevance',
		value: 'default',
	},
	{
		id: 'price-low-high',
		label: 'Price: Low to High',
		value: 'price:asc',
	},
	{
		id: 'price-high-low',
		label: 'Price: High to Low',
		value: 'price:desc',
	},
	{
		id: 'stock-low-high',
		label: 'Stock: Low to High',
		value: 'stock:asc',
	},
	{
		id: 'stock-high-low',
		label: 'Stock: High to Low',
		value: 'stock:desc',
	},
];
