import { Response } from "src/types/until/response.type";
export interface DetailType extends Response {
    hostName: React.ReactNode | undefined;
    endAt: React.ReactNode | undefined;
    title: React.ReactNode | undefined;
    startAt: React.ReactNode | undefined;
    description: React.ReactNode | undefined;
    data: {
        id: number,
        title: string,
        description: string,
        startAt: string,
        endAt: string,
        hostId: string,
        hostName: string
    }
}