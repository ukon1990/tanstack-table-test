/* eslint-disable react-hooks/rules-of-hooks */
// Based on: https://stackoverflow.com/questions/59183495/cant-get-lodash-debounce-to-work-properly-executed-multiple-times-reac
import _ from 'lodash';
import {
	useCallback,
	useRef,
} from 'react';

// Default settings is only executing the last callback sent, after delay has past.
// Override param object opts with trailing and/or leading change default settings.
export const useDebounce = <T extends Function>(callback: T, delay: number, opts = {
	leading: false,
	trailing: true,
}) => {
	if (!opts.leading && !opts.trailing) {
		console.warn('Callback will be blocked - both leading and trailing is set to false');
	}
	// @ts-ignore
	const ref = useRef();
	// @ts-ignore
	ref.current = callback;
	if (ref && ref.current) {
		return useCallback(_.debounce(
			// @ts-ignore
			(...args) => ref.current(...args),
			delay,
			opts
		), []);
	}
	return callback();
};