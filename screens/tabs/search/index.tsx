import { router, useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';
import { FlatList, View, Text } from 'react-native';

import { AppButton, Divider, ProductHorizontalCard, SearchInput } from '@/components';
import { products } from '@/fake-data';
import { useTheme } from '@/hooks';

import { SearchHistoryItem } from './components';
import { useSearchHistory } from './hooks';
import makeStyles from './styles';

const SearchScreen = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const { term } = useLocalSearchParams<{ term: string }>();
	const { history, removeFromHistory, clearHistory } = useSearchHistory();

	return (
		<FlatList<Product | string>
			data={term ? products : history}
			keyExtractor={(item) => (typeof item === 'string' ? item : item.id)}
			renderItem={({ item }) => (
				<View style={styles.itemWrapper}>
					{typeof item === 'string' ? (
						<SearchHistoryItem
							text={item}
							onPress={() => router.setParams({ term: item })}
							onRemove={() => removeFromHistory(item)}
						/>
					) : (
						<ProductHorizontalCard product={item} />
					)}
				</View>
			)}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={styles.container}
			ItemSeparatorComponent={() => <Divider style={styles.divider} />}
			stickyHeaderIndices={[0]}
			ListHeaderComponent={
				<View style={styles.listHeader}>
					<SearchInput />
					{!term && (
						<View style={styles.titleBar}>
							<Text style={styles.sectionTitle}>Recent Searches</Text>
							<AppButton
								size='sm'
								variant='ghost'
								title='Clear all'
								titleStyle={styles.clearButtonText}
								onPress={clearHistory}
							/>
						</View>
					)}
				</View>
			}
		/>
	);
};

export default SearchScreen;
