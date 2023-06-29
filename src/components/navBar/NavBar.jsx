import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { HiOutlineLogout, HiOutlineBell, HiOutlineMail } from "react-icons/hi";
import { Nav, NavItemContainer } from "./NavBar.styled";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {

    const navigate = useNavigate()

//----------------------------funcion para borrar los datos de LOCALSTORAGE-------------------
        const handleLogOut = () => {
                localStorage.removeItem('logged');
                localStorage.removeItem('email'); 
                localStorage.removeItem('password');
                navigate("/")
            }

    const onClickNavBarHandler = () => {
        if (props.open) {
            props.showNavBar(false);
        } else {
            props.showNavBar(true);
        }
    }

    if (props.open) {
        return (
            <>
                <Nav>
                    <NavItemContainer>
                        <AiOutlineMenuFold onClick={onClickNavBarHandler} />
                        <h2>{props.page}</h2>
                    </NavItemContainer>
                    <NavItemContainer>
                        <HiOutlineBell />
                        <HiOutlineMail />
                        <HiOutlineLogout
                            onClick={handleLogOut}
                            data-testid="btn-logout"
                        />
                    </NavItemContainer>
                </Nav>
            </>
        );
    } else {
        return (
            <>
                <Nav>
                    <NavItemContainer>
                        <AiOutlineMenuUnfold onClick={onClickNavBarHandler} />
                        <h2>{props.page}</h2>
                    </NavItemContainer>
                    <NavItemContainer>
                        <HiOutlineBell />
                        <HiOutlineMail />
                        <HiOutlineLogout
                            onClick={handleLogOut}
                            data-testid="btn-logout"
                        />
                    </NavItemContainer>
                </Nav>
            </>
        );
    }
};

export default NavBar;
