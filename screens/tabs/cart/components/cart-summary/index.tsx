import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

import { Divider } from '@/components';
import { useTheme } from '@/hooks';
import { useCartStore } from '@/store';
import { getCurrencyFormat } from '@/utils';

import makeStyles from './style';

const CartSummary = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const totalAmount = useCartStore((state) => state.totalAmount);

	return (
		<View style={styles.container}>
			<View style={styles.itemContainer}>
				<Text style={styles.ItemText}>Sub-total</Text>
				<Text style={styles.itemValue}>{getCurrencyFormat('USD', 5870)}</Text>
			</View>
			<View style={styles.itemContainer}>
				<Text style={styles.ItemText}>VAT(14%)</Text>
				<Text style={styles.itemValue}>{getCurrencyFormat('USD', 821.8)}</Text>
			</View>
			<View style={styles.itemContainer}>
				<Text style={styles.ItemText}>Shipping fee</Text>
				<Text style={styles.itemValue}>{getCurrencyFormat('USD', 100)}</Text>
			</View>
			<Divider />
			<View style={styles.itemContainer}>
				<Text style={styles.ItemText}>Total</Text>
				<Text style={styles.itemValue}>{getCurrencyFormat('USD', totalAmount)}</Text>
			</View>
		</View>
	);
};

export default CartSummary;
