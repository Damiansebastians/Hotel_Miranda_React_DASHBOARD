import styled from "styled-components";
import SideBar from "./sideBar/SideBar";
import NavBar from "./NavBar";

export default function MainNavContainer() {

    return (
        <>
            <MainContainer>
                <NavBar />
                <SideBar />
            </MainContainer>
        </>
    );
    }

    const MainContainer = styled.div`
    display: flex;
`;
