import Helpers from "../../helpers";

export const setNavBarButtons = () => {
    const navbar = document.getElementById("nav-bar");
    const usersBtn = Helpers.createNodeElement({
        type: "BUTTON",
        text: "Users",
        callbackClick: () => {
            console.error("users")
        }
    });
    const reposBtn = Helpers.createNodeElement({
        type: "BUTTON",
        text: "Repos",
        callbackClick: () => {
            console.error("repos")
        }
    });
    navbar.appendChild(usersBtn);
    navbar.appendChild(reposBtn);
}