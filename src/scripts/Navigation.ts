/**
 * Activates navigation by setting up event listeners for toggling navigation state and handling escape key.
 * @param {Element} navigation - The navigation element to activate.
 * @returns {void}
 * @example
 * import { activateNavigation } from "./Navigation.js"
 * let navigation = document.querySelector(".Navigation")
 * activateNavigation(navigation)
 */
export function activateNavigation (navigation: Element): void {
	let toggler = navigation.querySelector(`[aria-controls]`)
	if (!toggler) return

	toggler.setAttribute(`aria-expanded`, `false`)
	toggler.removeAttribute(`hidden`)

	toggler.addEventListener(`click`, toggleState)

	/**
	 * Toggles the state of the element and handles key events.
	 * @returns {void}
	 */
	function toggleState (): void {
		if (!toggler) return

		let isOpen = toggler.getAttribute(`aria-expanded`) === `true`
		let newState = !isOpen

		toggler.setAttribute(`aria-expanded`, String(newState))

		window[`${newState ? `add` : `remove`}EventListener`](`keyup`, handleEscape as EventListener)
		window[`${newState ? `add` : `remove`}EventListener`](`click`, handleOuterClick as EventListener)

		if (!newState && navigation.querySelector(`:focus`) !== null) (toggler as HTMLElement).focus()
	}

	/**
	 * Handles the Escape key event.
	 * If the Escape key is pressed, toggle the state of the navigation.
	 * @param {KeyboardEvent} event - The event object.
	 * @returns {void}
	 */
	function handleEscape (event: KeyboardEvent): void {
		if (event.code === `Escape`) toggleState()
	}

	/**
	 * Handle the outer click event.
	 * If the click target is not inside the navigation, toggle the state.
	 * @param {MouseEvent} event - The event object.
	 * @returns {void}
	 */
	function handleOuterClick (event: MouseEvent): void {
		if (event.target instanceof Node && !navigation.contains(event.target)) toggleState()
	}
}
