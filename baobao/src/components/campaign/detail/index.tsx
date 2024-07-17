import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baobaoAxios } from "src/libs/axios/CustomAxios";
import { DetailType } from "src/types/detail/detail.type";
import { ApplicantType } from "src/types/applicant/applicant.type";
import * as S from "src/components/campaign/detail/style";
import {showToast} from "src/libs/toast/Swal";

const Detail = () => {
    const { id } = useParams<{ id: string }>();
    const [detail, setDetail] = useState<DetailType | null>(null);
    const [applicants, setApplicants] = useState<ApplicantType[]>([]);
    const [isHost, setIsHost] = useState<boolean>(false);
    const [selectedApplicantId, setSelectedApplicantId] = useState<string | null>(null);

    useEffect(() => {
        const fetchDetailData = async () => {
            try {
                const response = await baobaoAxios.get(`/challenge/${id}`);
                if (response.data && response.data.data) {
                    setDetail(response.data.data);
                    setIsHost(response.data.data.hostId === sessionStorage.getItem("userId"));
                }
            } catch (error) {
                console.error("Failed to fetch detail data:", error);
            }
        };

        fetchDetailData();
    }, [id]);

    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const response = await baobaoAxios.get(`/challenge-applicant?id=${id}`);
                if (response.data && response.data.data) {
                    setApplicants(response.data.data);
                    console.log("목록받기 성공")
                }
            } catch (error) {
                console.error("목록받기 실패", error);
            }
        };

        fetchApplicants();
    }, [id]);

    const handleApply = async () => {
        try {
            const response = await baobaoAxios.post(`/challenge-applicant?id=${id}`);
            showToast("success", "신청 성공");
            console.log("신청성공", response);
        } catch (error) {
            console.error("신청실패", error);
            showToast("error", "신청 실패");
        }
    };
    const handleGivePoints = async (applicantId: string) => {
        try {
            const response = await baobaoAxios.patch(`/challenge-applicant/complete?id=${applicantId}`);
            showToast("success", "포인트 부여 완료");
            console.log("포인트 부여 성공", response);

            const updatedApplicants = applicants.map(applicant =>
                applicant.applicantId === applicantId ? { ...applicant, pointsAwarded: true } : applicant
            );
            setApplicants(updatedApplicants);
        } catch (error) {
            console.error("포인트 부여 실패", error);
            showToast("error", "포인트 부여 실패");
        }
    };

    const handleSelectApplicant = (applicantId: React.Key | null | undefined) => {
        handleGivePoints(applicantId);
        setSelectedApplicantId(applicantId);
    };

    if (!detail) {
        return <S.LoadingContainer>Loading...</S.LoadingContainer>;
    }

    return (
        <S.DetailContainer>
            <S.DetailHeaderContainer>
                <S.DetailHeader>제목: {detail.title}</S.DetailHeader>
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

            {!isHost && (
                <S.ButtonContainer>
                    <S.Button onClick={handleApply}>신청하기</S.Button>
                </S.ButtonContainer>
            )}

            <S.ApplicantListContainer>
                <S.SectionTitle>신청자 목록</S.SectionTitle>
                {applicants.map((applicant) => (
                    <S.ApplicantItem key={applicant.applicantId}>
                        <div>
                            <S.ApplicantLabel>이름:</S.ApplicantLabel>
                            <S.ApplicantValue>{applicant.name}</S.ApplicantValue>
                        </div>
                        <div>
                            <S.ApplicantLabel>상태:</S.ApplicantLabel>
                            <S.ApplicantValue>{applicant.isComplete ? "신청 성공" : "신청 성공"}</S.ApplicantValue>
                            <S.Button key={applicant.applicantId} onClick={() => handleSelectApplicant(applicant.applicantId)}>
                                확인
                            </S.Button>
                        </div>
                    </S.ApplicantItem>
                ))}
            </S.ApplicantListContainer>
        </S.DetailContainer>
    );
};

export default Detail;
