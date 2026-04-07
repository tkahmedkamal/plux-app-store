import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';

import { AppButton } from '@/components';
import { useTheme } from '@/hooks';

import makeStyles from './style';

const Quantity = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const [quantity, setQuantity] = useState(1);

	const handleIncrease = () => {
		setQuantity(quantity + 1);
	};
	const handleDecrease = () => {
		if (quantity <= 1) return;
		setQuantity(quantity - 1);
	};

	return (
		<View style={styles.container}>
			<AppButton
				size='icon'
				variant='outline'
				iconBefore={<MaterialIcons name='remove' style={styles.icon} />}
				style={styles.button}
				onPress={handleDecrease}
			/>
			<Text style={styles.text}>{quantity}</Text>
			<AppButton
				size='icon'
				variant='outline'
				iconAfter={<MaterialIcons name='add' style={styles.icon} />}
				style={styles.button}
				onPress={handleIncrease}
			/>
		</View>
	);
};

export default Quantity;
