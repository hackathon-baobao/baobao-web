import React from "react";
import * as S from "src/components/Common/Header/style";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleCampaign = () => {

    }
    return (
        <S.HeaderWrap>
            <S.Title>바오바오</S.Title>
            <S.Select>
                <span onClick={() => {
                    navigate("/campaign")
                }}>캠페인</span>
                <span>나무키우기</span>
                <span>퀴즈</span>
                <span>커뮤니티</span>
                <span>프로필</span>
            </S.Select>
        </S.HeaderWrap>
    );
}

export default Header;
