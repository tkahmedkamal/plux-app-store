import type { Href } from 'expo-router';

import { Link } from 'expo-router';
import React, { useMemo } from 'react';
import { Text } from 'react-native';

import { useTheme } from '@/hooks';

import makeStyles from './styles';

interface AuthPromptProps {
	text: string;
	linkText: string;
	href: Href;
}

const AuthPrompt = ({ text, linkText, href }: AuthPromptProps) => {
	const theme = useTheme();
	const styles = useMemo(() => makeStyles(theme), [theme]);

	return (
		<Text style={styles.text}>
			{text}{' '}
			<Link href={href} suppressHighlighting={true} style={styles.link}>
				{linkText}
			</Link>
		</Text>
	);
};

export default AuthPrompt;
