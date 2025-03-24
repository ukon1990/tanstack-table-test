import {
	MouseEvent,
} from 'react';
import {
	useDebounce,
} from './useDebounce';

const {
	sqrt,
	pow,
	abs,
} = Math;

/**
 * Helps deal with cases where you wish to allow for clicking an element, but in instances of double click or marking text wish
 * to make an exception.
 *
 * If you wish to disable the click event on a specific element and it's children use event.stopPropagation() in a onClick on that element.
 *
 * @param callback - The callback you wish to be triggered upon regular click (not marked text or double click)
 * @param maximumAllowedMouseTravelDistance - The maximum distance, the mouse is allowed to travel, while still triggering the callback.
 */
export const useClickHandler = (callback: Function, maximumAllowedMouseTravelDistance = 0) => {
	// Used to calculate the distance the mouse has traveled since the previous click
	let initialMouseLocation: { x: number, y: number } | undefined;
	// Used to check if the "double click" event was fast enough
	let doubleClickTimestamp: number | undefined;
	// This was the delay that felt the most natural to me for the debounce.
	const doubleClickDelayInMs = 250;
	// The double clicks usually happened within a shorter timespan than this after the debounce
	const doubleClickDelayOffsetInMs = 50;

	/**
   * Registeres a mouse down event
   */
	const onMouseDown = ({
		pageY,
		pageX,
	}: MouseEvent<HTMLTableRowElement>) => {
		initialMouseLocation = {
			x: pageX,
			y: pageY,
		};
	};

	/**
   Detecting if we should fire a onRowClick event or not.
   We wish let the user mark text, but at the same time we also want them to be able to click on a row to trigger an action
   @param pageY
   @param pageX
   @param type
   */
	const onClick = useDebounce(({
		pageY,
		pageX,
	}: MouseEvent<HTMLTableRowElement>) => {
		// If it was a double click, we should ignore the event as the user probably wanted to select text
		if (doubleClickTimestamp && +new Date() - doubleClickTimestamp <= doubleClickDelayInMs + doubleClickDelayOffsetInMs) {
			doubleClickTimestamp = undefined;
			return;
		}

		if (!initialMouseLocation) return;

		const xDistance = pageX - initialMouseLocation?.x || 0;
		const yDistance = pageY - initialMouseLocation?.y || 0;
		const distanceTraveledSinceLastEvent = sqrt(pow(xDistance, 2) + pow(yDistance, 2));

		/**
		 * Checking based on distance, as it would be more clutter with basing everything on time.
		 * Converting any negative values to a positive one with abs, so that we can allow for some movement, if we wish.
		 */
		if (abs(distanceTraveledSinceLastEvent) <= maximumAllowedMouseTravelDistance && callback) {
			callback();
		}
		initialMouseLocation = undefined;
	}, doubleClickDelayInMs);


	/**
   * Assigns a value to indicate that the click event was double click
   */
	const onDoubleClick = () => {
		doubleClickTimestamp = +new Date();
	};

	return {
		onClick,
		onMouseDown,
		onDoubleClick,
	};
};