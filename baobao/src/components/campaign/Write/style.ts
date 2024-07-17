import styled from "styled-components";

export const FormWrap = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 600px;
    padding: 20px;
    border-radius: 10px;
    width: 600px; 
    margin-top: 120px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

export const DateInputs = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`;

export const DateInput = styled.input`
    width: 48%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;

export const TitleInput = styled.input`
    width: 100%;
    padding: 20px; 
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 20px; 
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 20px; 
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 18px;
    resize: none;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const SubmitButton = styled.button`
    padding: 15px 30px; 
    background-color: #7AAA55;
    color: white;
    font-size: 18px; 
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #679e44;
    }
`;
