import { Platform } from 'react-native';
import { ms } from 'react-native-size-matters';

import { rootTheme } from './themes';

export const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : 'height';

export const ITEM_SPACING = ms(rootTheme.spaces.lg);
export const LAYOUT_PADDING = ms(rootTheme.spaces.xl);
