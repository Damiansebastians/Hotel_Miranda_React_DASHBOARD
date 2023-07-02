import { HiMenuAlt2, HiMenuAlt3, HiOutlineLogout, HiOutlineBell, HiOutlineMail } from "react-icons/hi";
import { Nav, NavItemContainer } from "./NavBar.styled";
import { useNavigate } from "react-router-dom";

const NavBar = ( props ) => {
    const navigate = useNavigate();

    const onClickSideBarHandler = () => {
        if (props.open) {
        props.showSideBar(false);
        } else {
        props.showSideBar(true);
        }
    };

//BORRAR DATOS DE STORAGE Y REDIRIGIR A LOGIN
    const handleLogOut = () => {
        localStorage.removeItem("logged");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        navigate("/");
    };

//REDIRIGIR A CONTACTO
    const HandleMail = () => {
        navigate("/Contact");
    };

    if (props.open) {
        return (
        <>
            <Nav>
            <NavItemContainer>
                <HiMenuAlt2 onClick={onClickSideBarHandler} />
                <h2>{props.page}</h2>
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
                <h2>{props.page}</h2>
            </NavItemContainer>
            <NavItemContainer>
                <HiOutlineBell />
                <HiOutlineMail onClick={HandleMail} />
                <HiOutlineLogout onClick={handleLogOut} />
            </NavItemContainer>
            </Nav>
        </>
        );
    }

//     return (
//         <>
//         <Nav margin={size ? "350px" : "0px"}>
//             <NavItemContainer>
//             <AiOutlineMenuFold onClick={openNav} />
//             <h2>Titulo</h2>
//             </NavItemContainer>
//             <NavItemContainer>
//             <HiOutlineBell />
//             <HiOutlineMail />
//             <HiOutlineLogout onClick={handleLogOut} data-testid="btn-logout" />
//             </NavItemContainer>
//         </Nav>
//         </>
//     );
};

export default NavBar;
