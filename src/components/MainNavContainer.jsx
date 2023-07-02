import styled from "styled-components";
import SideBar from "./sideBar/SideBar";
import NavBar from "./NavBar";

export default function MainNavContainer({ openNav, size }) {

    return (
        <>
            <MainContainer>
                <NavBar openNav={openNav} size={size} />
                <SideBar size={size} />
            </MainContainer>
        </>
    );
    }

    const MainContainer = styled.div`
    display: flex;
`;
