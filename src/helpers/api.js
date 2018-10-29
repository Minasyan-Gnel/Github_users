import config from "../configs";
import StoreUsers from "../stores";

var currentUserName;

/**
 * @name fetchUsers
 * @param {string} userName 
 * @param {number} currentPage 
 * @description do request github for users list /--- url ----> https://api.github.com/search/users?q={user_name}&&page={current_page}&&per_page={users_count}
 * @return {undefined}
 */
export const fetchUsers = (userName, currentPage) => {
    userName && (currentUserName = userName);
    const fullUrl = `${config.search}users?q=${userName || currentUserName}&&page=${currentPage}&&per_page=20`;
    return fetch(fullUrl)
    .then(response => response.json())
    .then((data) => {
        StoreUsers.setData(data, "usersList");
    });
}