import { Response } from "src/types/until/response.type";

export interface PointType extends Response {
    data: number,
    status: string,
    message: string,
}