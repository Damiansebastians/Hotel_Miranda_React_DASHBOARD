
import { Wrapper, Logo, LinkContainer, User, SideMenuUserImage, MenuLink, Copyright, Design } from "./SideMenu.styled";
import { RiDashboardLine, RiCalendarEventFill, RiUser6Line } from "react-icons/ri";
import { MdOutlineVpnKey } from "react-icons/md";
import logo from "../../assets/images/Logo_Hotel.png";

const SideMenu = () => {
    return (
        <Wrapper>
        <Logo>
            <img src={logo} alt="Logo Hotel" />
            <div>
                <h4>travl</h4>
                <p>Hotel Admin Dashboard</p>
            </div>
        </Logo>
        <LinkContainer>
            <li>
            <MenuLink to="/" activeClassName="active">
                <RiDashboardLine /> Dashboard
            </MenuLink>
            </li>
            <li>
            <MenuLink to="/rooms" activeClassName="active">
                <MdOutlineVpnKey />
                Room
            </MenuLink>
            </li>
            <li>
            <MenuLink NavLink to="/bookings" activeClassName="active">
                <RiCalendarEventFill />
                Booking
            </MenuLink>
            </li>
            <li>
            <MenuLink NavLink to="/guests" activeClassName="active">
                <RiUser6Line />
                Guest
            </MenuLink>
            </li>
            <li>
            <MenuLink NavLink to="/user" activeClassName="active">
                <RiUser6Line />
                Users
            </MenuLink>
            </li>
            <li>
            <MenuLink NavLink to="/contact" activeClassName="active">
                <RiUser6Line />
                Contact
            </MenuLink>
            </li>
        </LinkContainer>
        <User>
            <SideMenuUserImage></SideMenuUserImage>
            <h5>USER</h5>
            <p>mail user</p>
            <button>Edit User</button>
        </User>

        <Copyright>
            <h6>Travl Hotel Admin Dashboard</h6>
            <p>2023 All Rights Reserved</p>
        </Copyright>

        <Design>
            <p>Made with ♥ by Damian Silvera</p>
        </Design>

        </Wrapper>
    );
};

export default SideMenu;
