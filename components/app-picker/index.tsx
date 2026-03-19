import type { PickerProps } from '@react-native-picker/picker';

import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

import AppButton from '../app-button';

interface AppPickerProps extends PickerProps {
	options: {
		value: string;
		label: string;
	}[];
	value: string;
	placeholder: string;
	triggerStyles?: string;
	error?: string;
	onChange: (value: string) => void;
}

const AppPicker = ({
	options = [],
	value,
	placeholder,
	error,
	triggerStyles,
	onChange,
	...props
}: AppPickerProps) => {
	const [visible, setVisible] = useState(false);
	const [selectedValue, setSelectedValue] = useState('');

	const onValueChange = (itemValue: string) => {
		const selectedLabel = options.find((option) => option.value === itemValue)?.label ?? '';

		setSelectedValue(selectedLabel);
		onChange(itemValue);
	};

	return (
		<>
			<View className='gap-1'>
				<AppButton
					variant='secondary'
					// className={cn(
					// 	'bg-input items-start p-4 border-border',
					// 	error && 'border-destructive',
					// 	triggerClassName
					// )}
					// textClassName={cn(!selectedValue && 'text-muted-foreground')}
					onPress={() => setVisible(true)}
				>
					{selectedValue || placeholder}
				</AppButton>
				{error && <Text className='text-destructive text-sm font-interRegular'>{error}</Text>}
			</View>
			<Modal animationType='slide' visible={visible} transparent>
				<Pressable onPress={() => setVisible(false)} className='flex-1 items-center justify-end'>
					<Pressable
						onPress={() => {}}
						className='bg-modal w-full p-6 justify-center items-center rounded-3xl relative'
					>
						<View className='w-full items-end border-b border-border-modal pb-4'>
							<AppButton variant='ghost' className='w-16 h-8' onPress={() => setVisible(false)}>
								Done
							</AppButton>
						</View>
						<Picker
							{...props}
							selectedValue={value}
							onValueChange={(itemValue) => onValueChange(itemValue)}
							style={{ width: '100%' }}
							// itemStyle={{
							// 	fontFamily: fonts.interRegular,
							// 	height: 150,
							// }}
						>
							{options.map(({ label, value }) => (
								<Picker.Item
									key={value}
									// color={colors.foreground}
									label={label}
									value={value}
								/>
							))}
						</Picker>
					</Pressable>
				</Pressable>
			</Modal>
		</>
	);
};

export default AppPicker;
