import type { Control, FieldValues, Path } from 'react-hook-form';
import type { TextInputProps } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React, { useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

import { useTheme } from '@/hooks';

import makeStyles from './styles';

interface AppInputProps<T extends FieldValues> extends TextInputProps {
	label: string;
	name: Path<T>;
	control: Control<T>;
}

const AppInput = <T extends FieldValues>({
	label,
	control,
	name,
	secureTextEntry,
	style,
	...props
}: AppInputProps<T>) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const [isFocused, setIsFocused] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { invalid, isDirty, error } }) => {
				const isValid = isDirty && !invalid;

				const borderStyle = invalid
					? styles.invalid
					: isValid
						? styles.valid
						: isFocused
							? styles.borderFocused
							: undefined;

				const renderIcon = () => {
					if (secureTextEntry) {
						return (
							<Feather
								name={showPassword ? 'eye' : 'eye-off'}
								size={theme.spaces.lg}
								color={theme.colors.mutedForeground}
								style={styles.icon}
								onPress={() => setShowPassword((prev) => !prev)}
							/>
						);
					}

					if (invalid) {
						return (
							<AntDesign
								name='exclamation-circle'
								size={theme.spaces.lg}
								color={theme.colors.destructive}
								style={styles.icon}
							/>
						);
					}

					if (isValid) {
						return (
							<FontAwesome6
								name='circle-check'
								size={theme.spaces.lg}
								color={theme.colors.success}
								style={styles.icon}
							/>
						);
					}

					return null;
				};

				return (
					<View style={styles.container}>
						<Text style={styles.label}>{label}</Text>
						<View style={[styles.fieldContainer, borderStyle]}>
							<TextInput
								style={[styles.input, style]}
								placeholderTextColor={theme.colors.muted}
								ref={field.ref}
								value={field.value}
								secureTextEntry={!showPassword && secureTextEntry}
								autoCapitalize='none'
								onFocus={() => setIsFocused(true)}
								onBlur={() => {
									setIsFocused(false);
									return field.onBlur();
								}}
								onChangeText={field.onChange}
								{...props}
							/>
							{renderIcon()}
						</View>
						{error && <Text style={styles.error}>{error.message}</Text>}
					</View>
				);
			}}
		/>
	);
};

export default AppInput;
