import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

import { AppButton } from '@/components';
import { useTheme } from '@/hooks';
import { useCartStore } from '@/store';

import makeStyles from './style';

interface QuantityProps {
	productId: string;
}

const Quantity = ({ productId }: QuantityProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	const currentItem = useCartStore((state) => state.items.find((item) => item.id === productId));
	const addToCart = useCartStore((state) => state.addToCart);
	const removeFromCart = useCartStore((state) => state.removeFromCart);

	const quantity = currentItem?.quantity ?? 0;

	const handleIncrease = () => {
		if (!currentItem) return;
		addToCart(currentItem);
	};
	const handleDecrease = () => {
		if (!currentItem) return;
		removeFromCart(currentItem);
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
