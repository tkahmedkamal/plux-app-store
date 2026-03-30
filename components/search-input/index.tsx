import type { TextInputProps } from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';

import { useDebounce, useTheme } from '@/hooks';

import AppButton from '../app-button';

import makeStyles from './styles';

interface SearchInputProps extends TextInputProps {
	placeholder?: string;
}

const SearchInput = ({
	placeholder = 'Search for clothes...',
	style,
	...props
}: SearchInputProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const [isFocused, setIsFocused] = useState(false);
	const { term } = useLocalSearchParams<{ term: string }>();
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedTerm = useDebounce(searchTerm);
	const termRef = useRef(searchTerm);

	termRef.current = searchTerm;

	useEffect(() => {
		if (debouncedTerm !== undefined) {
			router.setParams({ term: debouncedTerm || undefined });
		}
	}, [debouncedTerm]);

	useEffect(() => {
		if (term !== undefined && term !== termRef.current) {
			setSearchTerm(term);
		}
	}, [term]);

	const handleClear = () => {
		setSearchTerm('');
		termRef.current = '';
		router.setParams({ term: undefined });
	};

	return (
		<View style={[styles.container, isFocused && styles.borderFocused]}>
			<Feather name='search' style={styles.icon} />
			<TextInput
				style={[styles.input, style]}
				placeholder={placeholder}
				placeholderTextColor={theme.colors.muted}
				value={searchTerm}
				autoCapitalize='none'
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				onChangeText={setSearchTerm}
				{...props}
			/>
			{searchTerm && (
				<AppButton
					size='icon'
					variant='ghost'
					iconAfter={<Feather name='x' style={styles.clearIcon} />}
					onPress={handleClear}
					style={styles.clearButton}
				/>
			)}
		</View>
	);
};

export default SearchInput;
