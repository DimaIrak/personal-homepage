import styled from "styled-components";

export const Wrapper = styled.article`
    margin-top: 96px;
    display: grid;
    justify-items: center;
    grid-gap: 32px;
    text-align: center;
    color: ${({ theme }) => theme.color.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-gap: 24px;
    }
`;

export const Header = styled.header`
    font-weight: 700;
    font-size: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
    }
`;

export const Paragraf = styled.p`
    margin: 0;
    font-size: 20px;
`;