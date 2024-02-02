/**
 * Stops propagation of click event and removes event listener
 *
 * @private
 * @param {object} event The click event
 */
function preventClickHandler(event) {
    console.log("Customization worked!");
    event.stopPropagation();
    document.body.removeEventListener("click", preventClickHandler, true);
    document.body.removeEventListener("contextmenu", preventClickHandler, true);
}

/**
 * Starts listening for click event and prevent propagation
 *
 * @param {object} values Values
 */
export default function preventClick(values) {
    document.body.addEventListener("click", preventClickHandler, true);
    document.body.addEventListener("contextmenu", preventClickHandler, true);
}
