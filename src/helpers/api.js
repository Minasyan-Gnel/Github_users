import config from "../configs";

export const fetchUsers = (userName, currentPage) => {
    const fullUrl = `${config.search}users?q=${userName}&&page=${currentPage}&&per_page=20`;
    return fetch(fullUrl)
    .then(response => response.json())
    .then((data) => {
      console.error(data);
    });
}