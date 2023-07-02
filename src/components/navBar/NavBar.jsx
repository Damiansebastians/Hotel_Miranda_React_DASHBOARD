import { HiMenuAlt2, HiMenuAlt3, HiOutlineLogout, HiOutlineBell, HiOutlineMail } from "react-icons/hi";
import { Nav, NavItemContainer } from "./NavBar.styled";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    //MOSTRAR EL TITULO SEGUN LA ROUTE
    const TitlePage = () => {
        switch (location.pathname) {
        case "/dashboard":
            return "Dashboard";
        case "/bookings":
            return "Bookings";
        case "/rooms":
            return "Rooms";
        case "/users":
            return "Users";
        case "/contact":
            return "Contact";
        default:
            return "";
        }
    };

    //MOSTRAR Y OCULTAR EL MENU
    const onClickSideBarHandler = () => {
        if (props.open) {
        props.showSideBar(false);
        } else {
        props.showSideBar(true);
        }
    };

    // BORRAR DATOS DE STORAGE Y REDIRIGIR A LOGIN
    const handleLogOut = () => {
        localStorage.removeItem("logged");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        navigate("/");
    };

    // REDIRIGIR A CONTACTO
    const HandleMail = () => {
        navigate("/Contact");
    };

    if (props.open) {
        return (
        <>
            <Nav>
            <NavItemContainer>
                <HiMenuAlt2 onClick={onClickSideBarHandler} />
                <h2>{TitlePage()}</h2>
            </NavItemContainer>
            <NavItemContainer>
                <HiOutlineMail onClick={HandleMail} />
                <HiOutlineBell />
                <HiOutlineLogout onClick={handleLogOut} />
            </NavItemContainer>
            </Nav>
        </>
        );
    } else {
        return (
        <>
            <Nav>
            <NavItemContainer>
                <HiMenuAlt3 onClick={onClickSideBarHandler} />
                <h2>{TitlePage()}</h2>
            </NavItemContainer>
            <NavItemContainer>
                <HiOutlineMail onClick={HandleMail} />
                <HiOutlineBell />
                <HiOutlineLogout onClick={handleLogOut} />
            </NavItemContainer>
            </Nav>
        </>
        );
    }
};

export default NavBar;