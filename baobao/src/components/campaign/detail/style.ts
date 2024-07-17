import styled from "styled-components";

export const DetailContainer = styled.div`
    width: 1000px;
    margin: 150px auto;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const DetailHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const DetailHeader = styled.h2`
    font-size: 28px;
    font-weight: bold;
    margin: 0;
`;

export const DateContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const DateLabel = styled.span`
    font-weight: bold;
    margin-right: 5px;
`;

export const DateValue = styled.span`
    margin-right: 20px;
`;

export const DetailInfoContainer = styled.div`
    border-radius: 10px;
    padding: 20px;
`;

export const DetailLabel = styled.span`
    display: block;
    font-weight: bold;
    margin-top: 500px;
`;

export const DetailValue = styled.span`
    display: block;
    margin-bottom: 10px;
`;

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 24px;
    color: #666;
`;
