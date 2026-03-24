import { router, useLocalSearchParams } from 'expo-router';
import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';

import { AppButton } from '@/components';
import { categories } from '@/fake-data';
import { useTheme } from '@/hooks';

import makeStyles from './styles';

const CategoryTabs = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const { category } = useLocalSearchParams<{ category: string }>();

	const categoriesList = [
		{ slug: 'all', name: 'All' },
		...(categories?.map(({ slug, name }) => {
			return {
				slug,
				name,
			};
		}) ?? []),
	];

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
