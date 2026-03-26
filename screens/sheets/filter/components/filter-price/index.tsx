import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import RangeSlider from 'react-native-sticky-range-slider';

import { MAX_PRICE, MIN_PRICE } from '@/constants';
import { useTheme } from '@/hooks';

import makeStyles from './styles';

interface FilterPriceProps {
	price: Price;
	onValueChange: (price: Price) => void;
}

const FilterPrice = ({ price, onValueChange }: FilterPriceProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const [initialPrice, setInitialPrice] = useState(price);
	const onChangeValueRef = useRef(onValueChange);

	useEffect(() => {
		setInitialPrice(price);
	}, [price]);

	onChangeValueRef.current = onValueChange;

	const handleValueChange = useCallback((min: number, max: number) => {
		setInitialPrice({ min, max });

		onChangeValueRef.current({ min, max });
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Price</Text>
				<Text style={styles.range}>
					${initialPrice.min} - ${initialPrice.max}
				</Text>
			</View>
			<RangeSlider
				min={MIN_PRICE}
				max={MAX_PRICE}
				step={1}
				minRange={5}
				low={initialPrice.min}
				high={initialPrice.max}
				onValueChanged={handleValueChange}
				renderHighValue={() => null}
				renderLowValue={() => null}
				renderThumb={() => <View style={styles.thumb} />}
				renderRail={() => <View style={styles.rail} />}
				renderRailSelected={() => <View style={styles.railSelected} />}
			/>
		</View>
	);
};

export default FilterPrice;
