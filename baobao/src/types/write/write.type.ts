import { Response } from "src/types/until/response.type";
export interface CampaignType extends Response {
    data: {
        title: string,
        description: string,
        startAt: string,
        endAt: string
    }
}