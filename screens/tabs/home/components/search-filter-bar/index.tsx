import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import { AppButton, SearchInput } from '@/components';
import { useTheme } from '@/hooks';

import makeStyles from './styles';

const SearchFilterBar = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<View style={styles.container}>
			<SearchInput />
			<AppButton
				variant='secondary'
				size='icon'
				iconAfter={<Feather name='filter' style={styles.icon} />}
				onPress={() => router.push('/(app)/(sheets)/filter')}
			/>
		</View>
	);
};

export default SearchFilterBar;
