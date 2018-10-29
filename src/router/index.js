import Users from "../components/users";
import Repos from "../components/repos";

const routes = {
    "/users": Users,
    "/repos": Repos
}

class Router {
    init () {
        const { state } = window.history;
        if (state) {
            const { path } = state;
            this.navigatePage(path);
            return
        }
        this.navigatePage("/users");
    }
    navigatePage (to) {
        window.history.pushState({path: to}, to, window.location.origin + to);
        routes[to]();
    }
}

export default new Router();