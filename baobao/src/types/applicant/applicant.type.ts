import { Response } from "src/types/until/response.type";

export interface ApplicantType extends Response {
    isComplete: React.ReactNode | undefined;
    email: React.ReactNode | undefined;
    name: React.ReactNode | undefined;
    applicantId: React.Key | null | undefined | undefined;
    data: {
        applicantId: "number",
        email: "string",
        name: "string",
        isComplete: "boolean"
    }
}