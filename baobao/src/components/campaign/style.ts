import styled from "styled-components";

export const MainWrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    position: relative;
`;

export const SubWrap = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Search = styled.input`
    margin-top: 20px;
    padding: 10px;
    width: 300px;
    font-size: 16px;
`;

export const CampaignWrap = styled.div`
    margin-top: 20px;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: scroll;
    height: calc(100vh - 200px);
    padding-bottom: 80px;
`;

export const CampaignItem = styled.div`
    width: calc(50% - 10px); /* Two items per row with a small margin */
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex-shrink: 0; /* Prevent shrinking */
`;

export const CampaignItemImage = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
`;

export const CampaignItemTitle = styled.span`
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    white-space: nowrap; /* Prevent text wrapping */
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%; /* Ensure ellipsis works correctly */
`;

export const FloatingButton = styled.button`
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #7AAA55;
    color: white;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: none;

    &:hover {
        background-color: #679e44;
    }
`;
