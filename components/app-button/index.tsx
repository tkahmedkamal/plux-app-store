import type { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useTheme } from '@/hooks';

import SpinningIcon from '../spinning-icon';

import makeStyles from './styles';

interface AppButtonProps extends TouchableOpacityProps {
	title: string;
	icon?: React.ReactNode;
	containerStyle?: StyleProp<ViewStyle>;
	titleStyle?: StyleProp<TextStyle>;
	isLoading?: boolean;
}

const AppButton = ({
	title,
	icon,
	disabled,
	isLoading,
	containerStyle,
	titleStyle,
}: AppButtonProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	const isDisabled = disabled || isLoading;

	return (
		<TouchableOpacity
			style={[styles.container, containerStyle, isDisabled && styles.disabledButton]}
			disabled={isDisabled}
		>
			{!isLoading ? (
				<>
					<Text style={[styles.title, titleStyle, isDisabled && styles.disabledText]}>{title}</Text>
					{icon && icon}
				</>
			) : (
				<SpinningIcon>
					<AntDesign
						name='loading-3-quarters'
						size={theme.spaces.xl}
						color={theme.colors.mutedForeground}
					/>
				</SpinningIcon>
			)}
		</TouchableOpacity>
	);
};

export default AppButton;
