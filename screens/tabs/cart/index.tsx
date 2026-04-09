import Feather from '@expo/vector-icons/Feather';
import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';

import { CartDuotoneIcon } from '@/assets/svgs';
import { AppButton, Empty } from '@/components';
import { useTheme } from '@/hooks';
import { useCartStore } from '@/store';

import { CartItemCard, CartSummary, CouponForm } from './components';
import makeStyles from './style';

const CartScreen = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const { items } = useCartStore();

	const isEmpty = items.length === 0;

	return (
		<View style={styles.container}>
			<FlatList
				data={items}
				keyExtractor={({ id }) => id}
				renderItem={({ item }) => <CartItemCard productId={item.id} />}
				contentContainerStyle={[styles.contentContainer, isEmpty && { flex: 1 }]}
				ListFooterComponentStyle={styles.listFooterComponent}
				ListFooterComponent={
					!isEmpty ? (
						<View style={styles.footerContainer}>
							<CouponForm />
							<CartSummary />
						</View>
					) : null
				}
				ListEmptyComponent={
					<Empty
						title='Your cart is empty'
						description='When you add products, they’ll appear here.'
						icon={<CartDuotoneIcon />}
					/>
				}
				showsVerticalScrollIndicator={false}
			/>
			{!isEmpty && (
				<AppButton
					title='Go to Checkout'
					iconAfter={<Feather name='arrow-right' style={styles.checkoutButtonIcon} />}
					onPress={() => {}}
				/>
			)}
		</View>
	);
};

export default CartScreen;
