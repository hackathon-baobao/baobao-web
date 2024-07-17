import { Response } from "src/types/until/response.type";

export interface RankType extends Response {
    data: {
        email: string,
        point: number,
        name: string,
    }
}