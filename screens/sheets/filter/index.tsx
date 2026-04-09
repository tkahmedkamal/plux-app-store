import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';

import { AppButton, AppSafeArea, Divider } from '@/components';
import { INITIAL_FILTERS } from '@/constants';
import { useTheme } from '@/hooks';
import { useFilterStore } from '@/store';

import { FilterPrice, FilterSort } from './components';
import makeStyles from './styles';

const FilterSheet = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const setFilters = useFilterStore((state) => state.setFilters);
	const [internalFilters, setInternalFilters] = useState(useFilterStore.getState().filters);

	const isFiltersChanged = JSON.stringify(internalFilters) !== JSON.stringify(INITIAL_FILTERS);

	const handleSortChange = (value: string) => {
		setInternalFilters((prev) => ({ ...prev, sort: value }));
	};

	const handlePriceChange = (price: Price) => {
		setInternalFilters((prev) => ({ ...prev, price }));
	};

	const handleApplyFilters = () => {
		setFilters(internalFilters);
		router.dismiss();
	};

	const handleResetFilters = () => {
		setInternalFilters(INITIAL_FILTERS);
	};

	return (
		<AppSafeArea style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerTitle}>Filter</Text>
					<View style={styles.actionButtons}>
						{isFiltersChanged && (
							<AppButton size='sm' variant='outline' title='Reset' onPress={handleResetFilters} />
						)}
						<AppButton
							size='icon'
							variant='ghost'
							iconAfter={<Ionicons name='close' style={styles.closeIcon} />}
							style={styles.closeBtn}
							onPress={() => router.dismiss()}
						/>
					</View>
				</View>
				<View style={styles.body}>
					<FilterSort value={internalFilters.sort} onSortChange={handleSortChange} />
					<Divider style={styles.divider} />
					<FilterPrice price={internalFilters.price} onValueChange={handlePriceChange} />
				</View>
				<View style={styles.footer}>
					<AppButton title='Apply Filters' onPress={handleApplyFilters} />
				</View>
			</View>
		</AppSafeArea>
	);
};

export default FilterSheet;
