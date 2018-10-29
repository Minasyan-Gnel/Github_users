import UsersSearchBar from "./usersSearchBar";
import { setSearchBarItemes } from "./searchBarItemes";
import UsersList from "../usersList";
import "./style.css";

const Users = () => {
    const rootPage = document.getElementById("root-page");
    const usersSearchBar = UsersSearchBar();
    const usersList = UsersList();
    const html = `<div id="users-wrapper">
        ${usersSearchBar}
        ${usersList}
    </div>`;
    rootPage.innerHTML = html;
    setSearchBarItemes();
}

export default Users;