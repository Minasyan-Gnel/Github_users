import Helpers from "../../helpers";
import { fetchUsers } from "../../helpers/api";

/**
 * @name setSearchBarItemes
 * @description set input for searching users and set buttons (next and back) for paging users
 * @return {undefined}
 */
export const setSearchBarItemes = () => {
    const searchBar = document.getElementById("search-bar-d");
    let currentPage = 1;
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
    const pagingBtnWrapper = Helpers.createNodeElement({
        tagName: "DIV",
        classes: ["paging-btn-wrapper"]
    });
    const nextBtn = Helpers.createNodeElement({
        tagName: "BUTTON",
        text: "Next",
        classes: ["next-btn"],
        callbackClick: () => {
            fetchUsers(null, ++currentPage)
        }
    });
    const backBtn = Helpers.createNodeElement({
        tagName: "BUTTON",
        text: "Back",
        classes: ["prev-btn"],
        callbackClick: () => {
            currentPage > 1 && fetchUsers(null, --currentPage);
        }
    });
    pagingBtnWrapper.appendChild(backBtn);
    pagingBtnWrapper.appendChild(nextBtn);
    searchBar.appendChild(pagingBtnWrapper);
    searchBar.appendChild(searchInput);
}