import Feather from '@expo/vector-icons/Feather';
import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';

import { AppButton } from '@/components';
import { products } from '@/fake-data';
import { useTheme } from '@/hooks';

import { CartItemCard, CartSummary, CouponForm } from './components';
import makeStyles from './style';

const CartScreen = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	// TODO: get cart items from API
	const cartItems = products.slice(0, 2);

	return (
		<View style={styles.container}>
			<FlatList
				data={cartItems}
				keyExtractor={({ id }) => id}
				renderItem={({ item }) => <CartItemCard {...item} />}
				contentContainerStyle={styles.contentContainer}
				ListFooterComponentStyle={styles.listFooterComponent}
				ListFooterComponent={
					<View style={styles.footerContainer}>
						<CouponForm />
						<CartSummary />
					</View>
				}
				showsVerticalScrollIndicator={false}
			/>
			<AppButton
				title='Go to Checkout'
				iconAfter={<Feather name='arrow-right' style={styles.checkoutButtonIcon} />}
				onPress={() => {}}
			/>
		</View>
	);
};

export default CartScreen;
