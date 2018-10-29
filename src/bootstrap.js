import "./style.css";
import Layout from "./containers/layout";
import { setNavBarButtons } from "./components/navBar/navBarButtons";

export const Bootstrap = () => {
    const root = document.getElementById("root");
    root.innerHTML = Layout();
    setNavBarButtons();
};