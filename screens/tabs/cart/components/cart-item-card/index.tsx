import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useMemo } from 'react';
import { View, Text, Image } from 'react-native';

import { AppButton } from '@/components';
import { useTheme } from '@/hooks';
import { getCurrencyFormat } from '@/utils';

import Quantity from '../quantity';

import makeStyles from './style';

interface CartItemCardProps {
	id: string;
	images: ProductImage[];
	title: string;
	currency: string;
	price: number;
}

const CartItemCard = ({ images, title, currency, price }: CartItemCardProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	const imageUrl = images[0]?.url;

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={{ uri: imageUrl ? imageUrl : require('@/assets/images/placeholder.png') }}
					resizeMode='contain'
					style={styles.image}
				/>
			</View>

			<View style={styles.infoContainer}>
				<View style={styles.infoTitleContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.itemsText}>items: 2x</Text>
				</View>
				<Text style={styles.price}>{getCurrencyFormat(currency, price)}</Text>
			</View>

			<View style={styles.actionsContainer}>
				<AppButton
					size='icon'
					variant='ghost'
					iconAfter={<MaterialIcons name='delete-outline' style={styles.deleteButtonIcon} />}
					style={styles.deleteButton}
				/>
				<Quantity />
			</View>
		</View>
	);
};

export default CartItemCard;
