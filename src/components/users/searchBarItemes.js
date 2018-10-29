import Helpers from "../../helpers";
import { fetchUsers } from "../../helpers/api";

export const setSearchBarItemes = () => {
    const searchBar = document.getElementById("search-bar-d");
    const currentPage = 1;
    const searchInput = Helpers.createNodeElement({
        tagName: "INPUT",
        id: "search-input",
        placeholder: "Search by user name",
        callbackEnter: (e) => {
            if (e.keyCode === 13) {
                const inputValue = e.target.value;
                fetchUsers(inputValue, currentPage)
            }
        }
    });
    searchBar.appendChild(searchInput);
}