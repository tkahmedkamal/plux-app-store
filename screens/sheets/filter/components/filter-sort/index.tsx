import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

import { AppButton } from '@/components';
import { SORT_OPTIONS } from '@/constants';
import { useTheme } from '@/hooks';

import makeStyles from './styles';

interface FilterSortProps {
	value: string;
	onSortChange: (value: string) => void;
}

const FilterSort = ({ value, onSortChange }: FilterSortProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	const sortValue = value;

	const handleSortChange = (value: string) => {
		onSortChange(value);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sort By</Text>
			<View style={styles.options}>
				{SORT_OPTIONS.map(({ id, label, value }) => (
					<AppButton
						key={id}
						size='md'
						variant={sortValue === value ? 'primary' : 'outline'}
						title={label}
						onPress={() => handleSortChange(value)}
					/>
				))}
			</View>
		</View>
	);
};

export default FilterSort;
