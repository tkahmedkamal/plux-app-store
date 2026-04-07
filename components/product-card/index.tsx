import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import { useTheme } from '@/hooks';
import { getCurrencyFormat } from '@/utils';

import WIshlistButton from '../wishlist-button';

import makeStyles from './styles';

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<Pressable style={styles.container} onPress={() => router.push(`/product/${product.id}`)}>
			<View style={styles.imageContainer}>
				<WIshlistButton productId={product.id} />
				<Image source={{ uri: product.images[0].url }} resizeMode='contain' style={styles.image} />
			</View>
			<View style={styles.bodyContainer}>
				<Text style={styles.title}>{product.title}</Text>
				<Text style={styles.price}>{getCurrencyFormat(product.currency, product.price)}</Text>
			</View>
		</Pressable>
	);
};

export default ProductCard;
