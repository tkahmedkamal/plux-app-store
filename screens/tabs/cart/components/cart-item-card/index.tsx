import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useMemo } from 'react';
import { View, Text, Image } from 'react-native';

import { AppButton } from '@/components';
import { useTheme } from '@/hooks';
import { useCartStore } from '@/store';
import { getCurrencyFormat } from '@/utils';

import Quantity from '../quantity';

import makeStyles from './style';

interface CartItemCardProps {
	productId: string;
}

const CartItemCard = ({ productId }: CartItemCardProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const removeItemFromCart = useCartStore((state) => state.removeItemFromCart);
	const currentItem = useCartStore((state) => state.items.find((item) => item.id === productId));

	if (!currentItem) {
		return null;
	}

	const { title, currency, images, price, totalAmount } = currentItem;
	const imageUrl = images[0]?.url;

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={imageUrl ? { uri: imageUrl } : require('@/assets/images/placeholder.png')}
					resizeMode='contain'
					style={styles.image}
				/>
			</View>

			<View style={styles.infoContainer}>
				<View style={styles.infoTitleContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.itemsText}>{getCurrencyFormat(currency, price)}</Text>
				</View>
				<Text style={styles.price}>{getCurrencyFormat(currency, totalAmount)}</Text>
			</View>

			<View style={styles.actionsContainer}>
				<AppButton
					size='icon'
					variant='ghost'
					iconAfter={<MaterialIcons name='delete-outline' style={styles.deleteButtonIcon} />}
					style={styles.deleteButton}
					onPress={() => removeItemFromCart(productId)}
				/>
				<Quantity productId={productId} />
			</View>
		</View>
	);
};

export default CartItemCard;
