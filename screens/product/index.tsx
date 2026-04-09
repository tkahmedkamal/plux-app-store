import { Redirect, useLocalSearchParams } from 'expo-router';
import React, { useMemo } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import { Badge, WishlistButton } from '@/components';
import { products } from '@/fake-data';
import { useTheme } from '@/hooks';
import { useCartStore } from '@/store';
import { getCurrencyFormat } from '@/utils';

import { AddToCart, RelatedProducts } from './components';
import makeStyles from './styles';

const ProductScreen = () => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const { id } = useLocalSearchParams<{ id: string }>();
	const { addToCart } = useCartStore();

	const foundProduct = products.find((product) => product.id === id);

	if (!foundProduct) {
		return <Redirect href='/(app)/(tabs)/home' />;
	}

	const { title, description, price, currency, images, category, stock } = foundProduct;
	const imageUrl = images[0]?.url;
	const inStock = stock > 0;
	const badgeVariant = inStock ? 'success' : 'destructive';
	const badgeText = inStock ? 'In Stock' : 'Out of Stock';

	const handleAddToCart = () => {
		addToCart(foundProduct);
	};

	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.imageContainer}>
					<WishlistButton onPress={() => {}} />
					<Image
						source={imageUrl ? { uri: imageUrl } : require('@/assets/images/placeholder.png')}
						resizeMode='contain'
						style={styles.image}
					/>
				</View>

				<View style={styles.bodyContainer}>
					<Text style={styles.title}>{title}</Text>
					<View style={styles.badgesContainer}>
						<Badge text={category} />
						<Badge variant={badgeVariant} text={badgeText} />
					</View>
					<Text style={styles.description}>{description}</Text>
				</View>
				<RelatedProducts />
			</ScrollView>

			<View style={styles.footerContainer}>
				<View style={styles.priceContainer}>
					<Text style={styles.priceLabel}>Price</Text>
					<Text style={styles.priceValue}>{getCurrencyFormat(currency, price)}</Text>
				</View>
				<AddToCart onPress={handleAddToCart} />
			</View>
		</View>
	);
};

export default ProductScreen;
