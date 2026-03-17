import type { FieldErrors, FieldValues, Path, UseFormSetFocus } from 'react-hook-form';

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
