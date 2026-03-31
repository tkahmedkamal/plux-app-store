import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { products } from '@/fake-data';
import { useTheme } from '@/hooks';

import { WishlistCard } from './components';
import makeStyles from './styles';

const WishlistScreen = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<FlatList
			data={products}
			keyExtractor={({ id }) => id}
			renderItem={({ item }) => <WishlistCard product={item} />}
			numColumns={2}
			showsVerticalScrollIndicator={false}
			columnWrapperStyle={styles.columnWrapper}
			contentContainerStyle={styles.contentContainer}
		/>
	);
};

export default WishlistScreen;
