import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useMemo } from 'react';

import { AppButton } from '@/components';
import { useTheme } from '@/hooks';

import makeStyles from './style';

interface AddToCartProps {
	onPress: () => void;
}
const AddToCart = ({ onPress }: AddToCartProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<AppButton
			size='lg'
			title='Add to Cart'
			iconBefore={<MaterialIcons name='add-shopping-cart' style={styles.icon} />}
			onPress={onPress}
		/>
	);
};

export default AddToCart;
