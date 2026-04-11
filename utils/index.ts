import type { FieldErrors, FieldValues, Path, UseFormSetFocus } from 'react-hook-form';

import { isAxiosError } from 'axios';

interface HandleFocusOnErrorParams<T extends FieldValues> {
	isValid: boolean;
	errors: FieldErrors<T>;
	setFocus: UseFormSetFocus<T>;
	onSubmit: () => void;
}

export const handleFocusOnError = <T extends FieldValues>({
	isValid,
	errors,
	setFocus,
	onSubmit,
}: HandleFocusOnErrorParams<T>) => {
	if (!isValid) {
		const firstErrorField = Object.keys(errors)[0] as Path<T>;
		setFocus(firstErrorField);
	}
	onSubmit();
};

export const getCurrencyFormat = (currency: string, price: number, locale = 'en-US') => {
	return Intl.NumberFormat(locale, { style: 'currency', currency }).format(price);
};

export const catchApiError = (error: unknown) => {
	if (isAxiosError(error)) {
		const data = error.response?.data as ApiErrorResponse;

		if (data) {
			if (data.error.code === 'ValidationError') {
				const errorMessage = Object.values(data.error.details).join(', ');
				throw new Error(errorMessage);
			}

			if (data.error && !data.error.details) {
				throw new Error(data.error.message);
			}

			throw new Error(data.message);
		}

		if (error.request) {
			throw new Error('Server is not responding. Please try again later.');
		}
	}

	if (error instanceof Error) {
		throw new Error(error.message);
	}

	throw new Error('Unknown error occurred');
};
