import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';

import { ProductCard } from '@/components';
import { products } from '@/fake-data';
import { useTheme } from '@/hooks';

import { CategoryTabs, SearchFilterBar } from './components';
import makeStyles from './styles';

const HomeScreen = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<FlatList
			data={products}
			keyExtractor={({ id }) => id}
			renderItem={({ item }) => <ProductCard product={item} />}
			numColumns={2}
			columnWrapperStyle={styles.columnWrapper}
			contentContainerStyle={styles.contentContainer}
			contentInsetAdjustmentBehavior='automatic'
			keyboardShouldPersistTaps='handled'
			ListHeaderComponent={
				<View style={styles.listHeaderContainer}>
					<SearchFilterBar />
					<CategoryTabs />
				</View>
			}
		/>
	);
};

export default HomeScreen;
