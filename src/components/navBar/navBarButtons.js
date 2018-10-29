import Helpers from "../../helpers";
import Router from "../../router";

export const setNavBarButtons = () => {
    const navbar = document.getElementById("nav-bar");
    const usersBtn = Helpers.createNodeElement({
        type: "BUTTON",
        text: "Users",
        callbackClick: () => {
            Router.navigatePage("/users");
        }
    });
    const reposBtn = Helpers.createNodeElement({
        type: "BUTTON",
        text: "Repos",
        callbackClick: () => {
            Router.navigatePage("/repos");
        }
    });
    navbar.appendChild(usersBtn);
    navbar.appendChild(reposBtn);
}