import React from "react";
import styled from "styled-components";

const Reviews = () => {

    const ContentReviews = styled.div`
        box-shadow: 0px 20px 30px #00000014;
        border-radius: 12px;
        background: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem 2rem;
        margin: 15% 0;
        `;

    return (
        <ContentReviews>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </ContentReviews>
    );
};

export default Reviews;


