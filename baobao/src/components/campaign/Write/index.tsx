import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baobaoAxios } from "src/libs/axios/CustomAxios";
import * as S from "src/components/campaign/Write/style";

const Write = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startAt, setStartAt] = useState('');
    const [endAt, setEndAt] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await baobaoAxios.post('/challenge', {
                title,
                description,
                startAt,
                endAt
            });
            console.log("성공", response);
            navigate('/campaign');
        } catch (error) {
            console.error("실패", error);
        }
    };

    return (
        <S.FormWrap onSubmit={handleSubmit}>
            <S.DateInputs>
                <S.DateInput
                    type="date"
                    value={startAt}
                    onChange={(e) => setStartAt(e.target.value)}
                    required
                    placeholder="시작일"
                />
                <S.DateInput
                    type="date"
                    value={endAt}
                    onChange={(e) => setEndAt(e.target.value)}
                    required
                    placeholder="신청마감일"
                />
            </S.DateInputs>
            <S.TitleInput
                type="text"
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <S.TextArea
                placeholder="내용을 입력해주세요"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <S.ButtonContainer>
                <S.SubmitButton type="submit">글쓰기</S.SubmitButton>
            </S.ButtonContainer>
        </S.FormWrap>
    );
};

export default Write;
