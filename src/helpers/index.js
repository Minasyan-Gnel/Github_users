const Helpers = (() => {
    return {
        createNodeElement: ({type, text, classes, id, callbackClick}) => {
            const element = document.createElement(type);
            if (id) {
                element.id = id;
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
        }
    }
})()

export default Helpers;