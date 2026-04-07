import { Text } from '@react-navigation/elements';
import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';

import { ProductCard } from '@/components';
import { products } from '@/fake-data';
import { useTheme } from '@/hooks';

import makeStyles from './style';

const RelatedProducts = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Related Products</Text>
			<FlatList
				data={products}
				keyExtractor={({ id }) => id}
				renderItem={({ item }) => <ProductCard product={item} />}
				contentContainerStyle={styles.contentContainer}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default RelatedProducts;
