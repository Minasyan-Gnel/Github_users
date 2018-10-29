import "./style.css";
import Layout from "./containers/layout";

export const Bootstrap = () => {
    const root = document.getElementById("root");
    root.innerHTML = Layout();
};