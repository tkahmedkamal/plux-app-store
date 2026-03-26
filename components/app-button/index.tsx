import type {
	PressableProps,
	PressableStateCallbackType,
	StyleProp,
	TextStyle,
	ViewStyle,
} from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import * as Haptics from 'expo-haptics';
import React, { useMemo } from 'react';
import { Platform, Pressable, Text } from 'react-native';

import { useTheme } from '@/hooks';

import SpinningIcon from '../spinning-icon';

import makeStyles from './styles';

type Size = 'lg' | 'md' | 'sm' | 'icon';
export type Variant = 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';

interface AppButtonProps extends PressableProps {
	title?: string;
	iconAfter?: React.ReactNode;
	iconBefore?: React.ReactNode;
	size?: Size;
	variant?: Variant;
	style?: StyleProp<ViewStyle>;
	titleStyle?: StyleProp<TextStyle>;
	isLoading?: boolean;
	onPress?: () => void;
}

const AppButton = ({
	title,
	iconAfter,
	iconBefore,
	size = 'lg',
	variant = 'primary',
	disabled,
	isLoading,
	style,
	titleStyle,
	onPress,
	...props
}: AppButtonProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	const isDisabled = disabled || isLoading;

	const getDynamicStyle = ({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> => [
		styles.container,
		styles[size],
		styles[variant],
		pressed && styles.pressedOpacity,
		pressed && variant === 'ghost' && styles.pressedGhost,
		pressed && styles.scale,
		isDisabled && styles.disabledButton,
		style,
	];

	const handlePress = () => {
		if (Platform.OS !== 'web') {
			Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
		}
		onPress?.();
	};

	return (
		<Pressable
			style={getDynamicStyle}
			disabled={isDisabled}
			{...props}
			accessibilityRole='button'
			onPress={handlePress}
		>
			{!isLoading ? (
				<>
					{iconBefore && iconBefore}
					{title && (
						<Text
							style={[
								styles.title,
								titleStyle,
								variant === 'secondary' && styles.titleSecondary,
								variant === 'outline' && styles.outlineText,
								isDisabled && styles.disabledText,
							]}
						>
							{title}
						</Text>
					)}
					{iconAfter && iconAfter}
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
		</Pressable>
	);
};

export default AppButton;
