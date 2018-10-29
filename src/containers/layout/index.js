import Navbar from "../../components/navBar";
import Users from "../../components/users";

const Layout = () => {
    const navbar = Navbar();
    const users = Users();
    const html = `<div id="contain-wrapper">
        ${navbar}
        ${users}
    </div>`;
    return html;
}

export default Layout;