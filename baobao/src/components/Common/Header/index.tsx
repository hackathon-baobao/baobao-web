import React from "react";
import * as S from "src/components/Common/Header/style";

const Header = () => {
    return (
        <S.HeaderWrap>
            <S.Title>바오바오</S.Title>
            <S.Select>
                <span>캠페인</span>
                <span>나무키우기</span>
                <span>퀴즈</span>
                <span>커뮤니티</span>
                <span>프로필</span>
            </S.Select>
        </S.HeaderWrap>
    );
}

export default Header;
