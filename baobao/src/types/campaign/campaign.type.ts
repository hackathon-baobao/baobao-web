import { Response } from "src/types/until/response.type";
export interface CampaignType extends Response {
    data: {
        id: number,
        title: string,
        startAt: string,
        endAt: string,
        hostId: string,
        hostName: string
    }
}