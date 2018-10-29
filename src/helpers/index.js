const Helpers = (() => {
    return {
        createNodeElement: ({tagName, type, text, classes, id, callbackClick, callbackEnter, placeholder}) => {
            const element = document.createElement(tagName);
            if (id) {
                element.id = id;
            }
            if (type) {
                element.type = type;
            }
            if (text) {
                element.innerText = text;
            }
            if (classes) {
                classes.forEach(elClass => element.classList.add(elClass));
            }
            if (callbackClick) {
                element.addEventListener("click", callbackClick);
            }
            if (callbackEnter) {
                element.addEventListener("keypress", callbackEnter);
            }
            if (placeholder) {
                element.placeholder = placeholder;
            }
            return element;
        }
    }
})()

export default Helpers;