import React, {useEffect, useState} from "react";
import {RankType} from "src/types/Rank/rank.type";
import {useNavigate} from "react-router-dom";
import {baobaoAxios} from "src/libs/axios/CustomAxios";
import {AxiosError} from "axios";

const Rank = () => {
    const [rank, setRank] = useState<RankType['data'][]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const navigate = useNavigate();

    const fetchRank = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await baobaoAxios.get('/member/ranks-kakao');
            if (response.data && response.data.data) {
                console.log("성공");
                setRank(response.data.data);
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
        fetchRank();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error loading data: {(error as AxiosError).message}</p>;
    }

    return (
        <div>
            <table>

            </table>
        </div>
    )
}
export default Rank;