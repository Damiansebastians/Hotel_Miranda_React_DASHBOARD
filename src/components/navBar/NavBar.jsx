import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { HiOutlineLogout, HiOutlineBell, HiOutlineMail } from "react-icons/hi";
import { Nav, NavItemContainer } from "./NavBar.styled";

const NavBar = (props) => {
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
                onClick={onclick}
                data-testid="logout__button"
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
                onClick={onclick}
                data-testid="logout__button"
                />
            </NavItemContainer>
            </Nav>
        </>
        );
    }
};

export default NavBar;
