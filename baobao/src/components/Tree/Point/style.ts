// style.js
import styled from "styled-components";

export const PointContainer = styled.div`
    margin-top: 20px;
`;

export const PointWrapper = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

export const PointCard = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 24px;
    text-align: center;
`;

export const PointTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const PointValue = styled.p`
    font-size: 36px;
    font-weight: bold;
    color: #333;
`;
