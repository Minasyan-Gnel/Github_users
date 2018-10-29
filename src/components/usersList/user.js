import Store from "../../stores";
import Helpers from "../../helpers";

/**
 * @name setUser
 * @description set user in users list
 * @return {undefined}
 */
export const setUser = () => {
    Store.addListener("usersList", (data) => {
        const usersList = document.getElementById("users-list");
        const nextBtn = document.getElementById("next-btn");
        nextBtn.disabled = false;
        console.error(nextBtn.disabled)
        usersList.innerHTML = "";
        data.items.forEach(item => {
            const elementUser = Helpers.createNodeElement({
                tagName: "DIV",
                classes: ["user"]
            });
            const userImage = Helpers.createNodeElement({
                tagName: "IMG",
                src: item.avatar_url,
                alt: "User picture"
            });
            const userName = Helpers.createNodeElement({
                tagName: "H4",
                text: item.login
            });
            const userId = Helpers.createNodeElement({
                tagName: "P",
                text: `user-id: ${item.id}`
            });
            elementUser.appendChild(userImage);
            elementUser.appendChild(userName);
            elementUser.appendChild(userId);
            usersList.appendChild(elementUser);
        });
    });
}