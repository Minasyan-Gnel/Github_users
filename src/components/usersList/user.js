import Store from "../../stores";

const setUser = () => {
    const usersList = document.getElementById("users-list");
    Store.addListener("usersList", (data) => {
        console.error("++++++++++++++++++++++")
    });
}