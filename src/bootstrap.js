import "./style.css";
import Layout from "./containers/layout";
import { setNavBarButtons } from "./components/navBar/navBarButtons";
import Router from "./router";
import { setUser } from "./components/usersList/user";

export const Bootstrap = () => {
    const root = document.getElementById("root");
    root.innerHTML = Layout();
    setNavBarButtons();
    setUser();
    Router.init();
};