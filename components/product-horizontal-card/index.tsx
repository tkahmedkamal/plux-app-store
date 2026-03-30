import Feather from '@expo/vector-icons/Feather';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useMemo } from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import { useTheme } from '@/hooks';
import { useSearchHistory } from '@/screens/tabs/search/hooks';
import { getCurrencyFormat } from '@/utils';

import makeStyles from './styles';

interface ProductHorizontalCardProps {
	product: Product;
}

const ProductHorizontalCard = ({ product }: ProductHorizontalCardProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);
	const { term } = useLocalSearchParams<{ term: string }>();
	const { saveToHistory } = useSearchHistory();

	const handlePress = () => {
		router.push('/');
		saveToHistory(term);
	};

	return (
		<Pressable style={styles.container} onPress={handlePress}>
			<View style={styles.content}>
				<View style={styles.imageContainer}>
					<Image
						source={{ uri: product.images[0].url }}
						resizeMode='contain'
						style={styles.image}
					/>
				</View>
				<View style={styles.bodyContainer}>
					<Text style={styles.title}>{product.title}</Text>
					<Text style={styles.price}>{getCurrencyFormat(product.currency, product.price)}</Text>
				</View>
			</View>
			<Feather name='arrow-up-right' style={styles.icon} />
		</Pressable>
	);
};

export default ProductHorizontalCard;
