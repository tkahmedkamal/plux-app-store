import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useMemo } from 'react';

import { AppButton } from '@/components';
import { useTheme } from '@/hooks';

import makeStyles from './style';

interface AddToCartProps {
	disabled?: boolean;
	onPress: () => void;
}
const AddToCart = ({ disabled, onPress }: AddToCartProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<AppButton
			size='lg'
			title='Add to Cart'
			iconBefore={
				<MaterialIcons
					name='add-shopping-cart'
					style={[styles.icon, disabled && styles.disabledIcon]}
				/>
			}
			onPress={onPress}
			disabled={disabled}
		/>
	);
};

export default AddToCart;
