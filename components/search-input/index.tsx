import type { TextInputProps } from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import React, { useMemo, useState } from 'react';
import { TextInput, View } from 'react-native';

import { useTheme } from '@/hooks';

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
	const [query, setQuery] = useState('');

	return (
		<View style={[styles.container, isFocused && styles.borderFocused]}>
			<Feather name='search' style={styles.icon} />
			<TextInput
				style={[styles.input, style]}
				placeholder={placeholder}
				placeholderTextColor={theme.colors.muted}
				value={query}
				autoCapitalize='none'
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				onChangeText={setQuery}
				{...props}
			/>
		</View>
	);
};

export default SearchInput;
