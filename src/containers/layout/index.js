import Navbar from "../../components/navBar";
import RootPage from "../rootPage";

const Layout = () => {
    const navbar = Navbar();
    const rootPage = RootPage();
    const html = `<div id="layout">
        ${navbar}
        ${rootPage}
    </div>`;
    return html;
}

export default Layout;