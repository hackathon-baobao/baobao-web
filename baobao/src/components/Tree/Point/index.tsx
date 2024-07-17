import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "src/components/Tree/Point/style";

const Point = () => {
    const { id } = useParams();
    const [points, setPoints] = useState(0);

    useEffect(() => {
        const fetchPoints = async () => {
            try {
                const response = await fetch(`/challenge-applicant/complete?id=${id}`);
                const data = await response.json();
                setPoints(data.points);
            } catch (error) {
                console.error("Error fetching points:", error);
            }
        };

        fetchPoints();
    }, [id]);

    return (
        <S.PointWrapper>
            <S.PointCard>
                <S.PointTitle>포인트</S.PointTitle>
                <S.PointContainer>
                    <S.PointValue>현재 당신의 포인트: 100{points}점</S.PointValue>
                </S.PointContainer>
            </S.PointCard>
        </S.PointWrapper>
    );
};

export default Point;
