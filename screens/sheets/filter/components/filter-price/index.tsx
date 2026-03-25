import React, { useCallback, useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import RangeSlider from 'react-native-sticky-range-slider';

import { useTheme } from '@/hooks';

import makeStyles from './styles';

const MIN_AGE = 1;
const MAX_AGE = 20;

const FilterPrice = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const [min, setMin] = useState(MIN_AGE);
	const [max, setMax] = useState(MAX_AGE);

	const handleValueChange = useCallback((newLow: number, newHigh: number) => {
		setMin(newLow);
		setMax(newHigh);
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Price</Text>
				<Text style={styles.range}>
					${min} - ${max}
				</Text>
			</View>
			<RangeSlider
				min={MIN_AGE}
				max={MAX_AGE}
				step={1}
				minRange={5}
				low={min}
				high={max}
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
