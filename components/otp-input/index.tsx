import type { OTPInputStyles } from './styles';
import type { SlotProps as SlotPropsInterface } from 'input-otp-native';
import type { Control, FieldValues, Path } from 'react-hook-form';

import { OTPInput as OTPInputField } from 'input-otp-native';
import React, { useEffect, useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Text, View } from 'react-native';
import Animated, {
	useAnimatedStyle,
	withRepeat,
	withTiming,
	withSequence,
	useSharedValue,
} from 'react-native-reanimated';

import { useTheme } from '@/hooks';

import makeStyles from './styles';

interface OTPInputProps<T extends FieldValues> {
	name: Path<T>;
	control: Control<T>;
	maxLength?: number;
	onResendCode: () => void;
}

interface SlotProps extends SlotPropsInterface {
	styles?: OTPInputStyles;
	stats: {
		invalid: boolean;
		isDirty: boolean;
	};
}

interface FakeCaretProps {
	styles?: OTPInputStyles;
}

const RESEND_TIME = 60;

const OTPInput = <T extends FieldValues>({
	name,
	control,
	maxLength = 4,
	onResendCode,
}: OTPInputProps<T>) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const [time, setTime] = useState(0);

	const hasTime = time > 0;

	useEffect(() => {
		if (time === 0) return;

		const interval = setInterval(() => setTime((prev) => prev - 1), 1000);

		return () => clearInterval(interval);
	}, [time]);

	const handleResendCode = () => {
		setTime(RESEND_TIME);
		onResendCode();
	};

	return (
		<View style={styles.container}>
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState: { invalid, isDirty } }) => (
					<OTPInputField
						ref={field.ref}
						onChange={field.onChange}
						onBlur={field.onBlur}
						maxLength={maxLength}
						clearTextOnFocus={false}
						inputMode='numeric'
						pattern='^\d+$'
						autoFocus
						render={({ slots }) => (
							<View style={styles.slotsContainer}>
								{slots.map((slot, idx) => (
									<Slot key={idx} {...slot} styles={styles} stats={{ invalid, isDirty }} />
								))}
							</View>
						)}
					/>
				)}
			/>
			<Text style={styles.resendText}>
				Email not received?{' '}
				<Text
					style={[styles.resendBtn, hasTime && styles.resendDisabled]}
					disabled={hasTime}
					onPress={handleResendCode}
				>
					Resend Code
				</Text>
			</Text>
			{hasTime && (
				<Text style={styles.time}>
					Retry in <Text style={styles.timeValue}>{time}</Text> seconds
				</Text>
			)}
		</View>
	);
};

export default OTPInput;

const Slot = ({ char, isActive, hasFakeCaret, stats, styles }: SlotProps) => {
	const { isDirty, invalid } = stats;

	const isValid = isDirty && !invalid;

	const slotStyles = invalid
		? styles?.slotInvalid
		: isValid
			? styles?.slotValid
			: isActive
				? styles?.slotActive
				: undefined;

	return (
		<View style={[styles?.slot, slotStyles]}>
			{char !== null && <Text style={styles?.char}>{char}</Text>}
			{hasFakeCaret && <FakeCaret styles={styles} />}
		</View>
	);
};

const FakeCaret = ({ styles }: FakeCaretProps) => {
	const opacity = useSharedValue(1);

	useEffect(() => {
		opacity.value = withRepeat(
			withSequence(withTiming(0, { duration: 500 }), withTiming(1, { duration: 500 })),
			-1,
			true
		);
	}, [opacity]);

	const animatedStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
	}));

	return (
		<View style={styles?.caretContainer}>
			<Animated.View style={[styles?.caret, animatedStyle]} />
		</View>
	);
};
