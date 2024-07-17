import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baobaoAxios } from "src/libs/axios/CustomAxios";
import { DetailType } from "src/types/detail/detail.type"; // Adjust the path as per your project structure
import * as S from "./style"; // Adjust the path as per your project structure

const Detail = () => {
    const { id } = useParams<{ id: string }>(); // Get the id parameter from the URL
    const [detail, setDetail] = useState<DetailType | null>(null); // State to hold detail data

    useEffect(() => {
        const fetchDetailData = async () => {
            try {
                const response = await baobaoAxios.get(`/challenge/${id}`);
                if (response.data && response.data.data) {
                    setDetail(response.data.data);
                }
            } catch (error) {
                console.error("Failed to fetch detail data:", error);
            }
        };

        fetchDetailData();
    }, [id]);

    if (!detail) {
        return <S.LoadingContainer>Loading...</S.LoadingContainer>; // Placeholder for loading state
    }

    return (
        <S.DetailContainer>
            <S.DetailHeaderContainer>
                <S.DetailHeader>제목:{detail.title}</S.DetailHeader>
                <S.DateContainer>
                    <S.DateLabel>시작일: </S.DateLabel>
                    <S.DateValue>{detail.startAt}</S.DateValue>
                    <S.DateLabel>신청마감일: </S.DateLabel>
                    <S.DateValue>{detail.endAt}</S.DateValue>
                </S.DateContainer>
            </S.DetailHeaderContainer>
            <S.DetailInfoContainer>
                <S.DetailValue>{detail.description}</S.DetailValue>
            </S.DetailInfoContainer>
            <S.DetailLabel>작성자: {detail.hostName}</S.DetailLabel>
        </S.DetailContainer>
    );
};

export default Detail;
