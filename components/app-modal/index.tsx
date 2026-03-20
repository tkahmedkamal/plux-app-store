import type { Variant } from '../app-button';
import type { StyleProp, ViewStyle } from 'react-native';

import React, { useMemo } from 'react';
import { Modal, Text, View } from 'react-native';

import { useTheme } from '@/hooks';

import AppButton from '../app-button';

import makeStyles from './style';

interface AppModalProps {
	title: string;
	description?: string;
	icon?: React.ReactNode;
	visible?: boolean;
	actions: {
		title: string;
		variant?: Variant;
		style?: StyleProp<ViewStyle>;
		onPress: () => void;
	}[];
}

const AppModal = ({ title, description, icon, visible, actions }: AppModalProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<Modal visible={visible} transparent>
			<View style={styles.backdrop}>
				<View style={styles.modalCard}>
					<View style={styles.content}>
						{icon}
						<View style={styles.textContainer}>
							<Text style={styles.title}>{title}</Text>
							<Text style={styles.description}>{description}</Text>
						</View>
					</View>
					<View style={styles.footer}>
						{actions.map(({ title, variant, style, onPress }, idx) => (
							<AppButton
								key={idx}
								variant={variant}
								title={title}
								style={style}
								onPress={onPress}
							/>
						))}
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default AppModal;
