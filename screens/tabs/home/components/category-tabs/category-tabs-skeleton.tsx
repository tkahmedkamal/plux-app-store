import React, { useMemo } from 'react';
import { View } from 'react-native';

import { useTheme } from '@/hooks';

import makeStyles from './styles';

interface CategoryTabsSkeletonProps {
	length?: number;
}

const CategoryTabsSkeleton = ({ length = 5 }: CategoryTabsSkeletonProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	const items = Array.from({ length }, (_, index) => `item-${index}`);

	return (
		<View style={styles.skeletonContainer}>
			{items.map((item) => (
				<View key={item} style={styles.skeletonItem} />
			))}
		</View>
	);
};

export default CategoryTabsSkeleton;
