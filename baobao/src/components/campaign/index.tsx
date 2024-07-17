import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CampaignType } from "src/types/campaign/campaign.type";
import { baobaoAxios } from "src/libs/axios/CustomAxios";
import { AxiosError } from "axios";
import * as S from "src/components/campaign/style";
import CampaignImg from "src/assets/img/work.png";

const Campaign = () => {
    const [campaign, setCampaign] = useState<CampaignType['data'][]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const fetchCampaign = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await baobaoAxios.get('/challenge');
            if (response.data && response.data.data) {
                console.log("성공");
                setCampaign(response.data.data);
            }
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error("실패", axiosError);
            setError(axiosError);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchCampaign();
    }, []);

    const handleViewCampaign = (id: number) => {
        navigate(`/campaign/${id}`);
    };

    const handleCreateCampaign = () => {
        navigate(`/campaign/create`);
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading data: {(error as AxiosError).message}</p>;
    }

    return (
        <S.MainWrap>
            <S.SubWrap>
                <S.Search
                    type="text"
                    placeholder="검색 (이름 또는 학번)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <S.CampaignWrap>
                    {campaign
                        .filter(item => item.title.includes(searchTerm) || item.id.toString().includes(searchTerm))
                        .map((item, index) => (
                            <S.CampaignItem key={index} onClick={() => handleViewCampaign(item.id)}>
                                <S.CampaignItemImage src={CampaignImg} alt={item.title} />
                                <S.CampaignItemTitle>{item.title}</S.CampaignItemTitle>
                                <S.CampaignItemTitle>{item.endAt}까지</S.CampaignItemTitle>
                            </S.CampaignItem>
                        ))}
                </S.CampaignWrap>
            </S.SubWrap>
            <S.FloatingButton onClick={handleCreateCampaign}>+</S.FloatingButton>
        </S.MainWrap>
    )
}

export default Campaign;
