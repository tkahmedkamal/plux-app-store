import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay = 1000) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		let timeout = setTimeout(() => setDebouncedValue(value), delay);

		return () => {
			clearTimeout(timeout);
		};
	}, [delay, value]);

	return debouncedValue;
};

export default useDebounce;
