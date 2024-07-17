import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "src/components/Tree/Point/style";
import { baobaoAxios } from "src/libs/axios/CustomAxios";
import { PointType } from "src/types/point/point.type";

const Point = () => {
    const { id } = useParams<{ id: string }>(); // useParams에서 id를 문자열로 가져오도록 수정
    const [data, setData] = useState<PointType | null>(null); // 데이터 상태 초기화

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await baobaoAxios.get<PointType>('/member/point/my');
                console.log("성공", response.data); // 응답 데이터 콘솔 출력
                if (response.data && response.data.status === 200) {
                    setData(response.data); // 데이터 업데이트
                    console.log("데이터 가져오기 성공");
                } else {
                    console.error("데이터 가져오기 실패: 서버 응답 없음");
                }
            } catch (error) {
                console.error("데이터 가져오기 중 오류 발생:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <S.PointWrapper>
            <S.PointCard>
                <S.PointTitle>포인트 정보</S.PointTitle>
                <S.PointContainer>
                    {data ? (
                        <S.PointValue>나의 포인트: {data.data}</S.PointValue>
                    ) : (
                        <S.PointValue>데이터를 불러오는 중...</S.PointValue>
                    )}
                </S.PointContainer>
            </S.PointCard>
        </S.PointWrapper>
    );
};

export default Point;
