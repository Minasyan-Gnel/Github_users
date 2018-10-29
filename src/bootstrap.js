import "./style.css";
import Layout from "./containers/layout";
import { setNavBarButtons } from "./components/navBar/navBarButtons";
import Router from "./router";

export const Bootstrap = () => {
    const root = document.getElementById("root");
    root.innerHTML = Layout();
    setNavBarButtons();
    Router.init();
};