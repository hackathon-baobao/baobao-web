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
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DetailLabel = styled.span`
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
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

export const ButtonContainer = styled.div`
    margin-top: 20px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: #7AAA55;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
        background-color: #679e44;
    }
`;

export const ApplicantListContainer = styled.div`
    margin-top: 20px;
`;

export const SectionTitle = styled.h3`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const ApplicantItem = styled.div`
    background-color: #f5f5f5;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;

    &:first-child {
        margin-top: 0;
    }
`;

export const ApplicantLabel = styled.span`
    font-weight: bold;
`;

export const ApplicantValue = styled.span`
    margin-left: 10px;
`;
