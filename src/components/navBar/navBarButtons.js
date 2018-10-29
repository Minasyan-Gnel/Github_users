import Helpers from "../../helpers";
import Router from "../../router";

/**
 * @name setNavBarButtons
 * @description set buttons in the navigation bar
 * @return {undefined}
 */
export const setNavBarButtons = () => {
    const navbar = document.getElementById("nav-bar");
    const usersBtn = Helpers.createNodeElement({
        tagName: "BUTTON",
        text: "Users",
        callbackClick: () => {
            Router.navigatePage("/users");
        }
    });
    const reposBtn = Helpers.createNodeElement({
        tagName: "BUTTON",
        text: "Repos",
        callbackClick: () => {
            Router.navigatePage("/repos");
        }
    });
    navbar.appendChild(usersBtn);
    navbar.appendChild(reposBtn);
}