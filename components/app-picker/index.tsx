import type { PickerProps } from '@react-native-picker/picker';
import type { Control, ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import type { StyleProp, ViewStyle } from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import React, { useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Modal, Pressable, Text, View } from 'react-native';

import { useTheme } from '@/hooks';

import AppButton from '../app-button';

import makeStyles from './styles';

interface AppPickerProps<T extends FieldValues> extends PickerProps {
	options: {
		value: string;
		label: string;
	}[];
	name: Path<T>;
	control: Control<T>;
	label: string;
	placeholder: string;
	triggerStyles?: StyleProp<ViewStyle>;
	error?: string;
}

const AppPicker = <T extends FieldValues>({
	options = [],
	name,
	control,
	label,
	placeholder,
	triggerStyles,
	error,
	...props
}: AppPickerProps<T>) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const [visible, setVisible] = useState(false);
	const [selectedValue, setSelectedValue] = useState('');

	const onValueChange = (itemValue: string, field: ControllerRenderProps<T, Path<T>>) => {
		const selectedLabel = options.find((option) => option.value === itemValue)?.label ?? '';

		setSelectedValue(selectedLabel);
		field.onChange(itemValue);
	};

	const handleClose = () => {
		setVisible(false);
	};

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.label}>{label}</Text>
				<AppButton
					variant='outline'
					title={selectedValue || placeholder}
					style={[styles.trigger, error && styles.triggerError, triggerStyles]}
					titleStyle={!selectedValue && styles.triggerText}
					onPress={() => setVisible(true)}
				/>
				{error && <Text style={styles.errorText}>{error}</Text>}
			</View>

			<Modal animationType='slide' visible={visible} transparent>
				<Pressable style={styles.modal} onPress={handleClose}>
					<Pressable onPress={() => {}} style={styles.modalContainer}>
						<View style={styles.header}>
							<Text style={styles.title}>Select Role</Text>
							<AppButton
								size='icon'
								variant='ghost'
								iconAfter={<Feather name='check' style={styles.closeIcon} />}
								style={styles.close}
								onPress={handleClose}
							/>
						</View>
						<Controller
							name={name}
							control={control}
							render={({ field }) => (
								<Picker
									{...props}
									selectedValue={field.value}
									onValueChange={(itemValue) => onValueChange(itemValue, field)}
									style={styles.picker}
									itemStyle={styles.pickerItem}
								>
									{options.map(({ label, value }) => (
										<Picker.Item
											key={value}
											label={label}
											value={value}
											color={theme.colors.foreground}
										/>
									))}
								</Picker>
							)}
						/>
					</Pressable>
				</Pressable>
			</Modal>
		</>
	);
};

export default AppPicker;
