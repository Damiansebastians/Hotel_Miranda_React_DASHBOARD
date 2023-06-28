import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { HiOutlineLogout, HiOutlineBell, HiOutlineMail } from "react-icons/hi";
import { Nav, NavItemContainer } from "./NavBar.styled";
import { useLocation, useNavigate } from "react-router";

const NavBar = (props) => {
    const { state } = useLocation();
    const navigate = useNavigate();

    console.log(state);

    const onLogout = () => {
        navigate('/', {
            replace: true,
        });
    };

    const onClickNavBarHandler = () => {
        if (props.open) {
            props.showNavBar(false);
        } else {
            props.showNavBar(true);
        }
    };

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
                            onClick={onLogout}
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
                            onClick={onLogout}
                            data-testid="btn-logout"
                        />
                    </NavItemContainer>
                </Nav>
            </>
        );
    }
};

export default NavBar;
