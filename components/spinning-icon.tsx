import React, { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

const SpinningIcon = ({ children }: Children) => {
	const spinValue = useRef(new Animated.Value(0));

	useEffect(() => {
		const spin = () => {
			spinValue.current.setValue(0);
			Animated.timing(spinValue.current, {
				toValue: 1,
				duration: 500,
				easing: Easing.linear,
				useNativeDriver: true,
			}).start(() => spin());
		};

		spin();
	}, []);

	const rotate = spinValue.current.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	});

	return (
		<Animated.View
			style={{
				transform: [{ rotate }],
			}}
		>
			{children}
		</Animated.View>
	);
};

export default SpinningIcon;
