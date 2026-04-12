import { useQuery } from '@tanstack/react-query';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';

import { AppButton } from '@/components';
import { ALL_CATEGORIES_KEY } from '@/contact/category/get-categories-contract';
import { useTheme } from '@/hooks';
import { getCategoriesApi } from '@/services/category-service';

import CategoryTabsSkeleton from './category-tabs-skeleton';
import makeStyles from './styles';

const CategoryTabs = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const { category } = useLocalSearchParams<{ category: string }>();

	const { data: categories, isLoading } = useQuery({
		queryKey: [ALL_CATEGORIES_KEY],
		queryFn: getCategoriesApi,
		select: (data) => data.data,
	});

	if (isLoading) {
		return <CategoryTabsSkeleton />;
	}

	const categoriesList = categories ?? [];
	const hasCategories = categoriesList.length > 0;

	if (!hasCategories) {
		return null;
	}

	const onPressHandler = (slug: string) => {
		router.setParams({
			category: slug,
		});
	};

	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.container}
			keyboardShouldPersistTaps='handled'
		>
			<AppButton
				variant={category === 'all' ? 'primary' : 'outline'}
				size='md'
				title='All'
				onPress={() => onPressHandler('all')}
			/>
			{categoriesList.map(({ name, slug }) => (
				<AppButton
					key={slug}
					variant={category === slug ? 'primary' : 'outline'}
					size='md'
					title={name}
					onPress={() => onPressHandler(slug)}
				/>
			))}
		</ScrollView>
	);
};

export default CategoryTabs;
