import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useMemo } from 'react';
import { Text, View } from 'react-native';

import { AppButton, AppSafeArea, Divider } from '@/components';
import { useTheme } from '@/hooks';

import { FilterPrice, FilterSort } from './components';
import makeStyles from './styles';

const FilterSheet = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<AppSafeArea style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerTitle}>Filter</Text>
					<AppButton
						size='icon'
						variant='ghost'
						iconAfter={<Ionicons name='close' style={styles.closeIcon} />}
						style={styles.closeBtn}
						onPress={() => router.dismiss()}
					/>
				</View>
				<View style={styles.body}>
					<FilterSort />
					<Divider style={styles.divider} />
					<FilterPrice />
				</View>
				<View style={styles.footer}>
					<AppButton title='Apply Filters' />
				</View>
			</View>
		</AppSafeArea>
	);
};

export default FilterSheet;
