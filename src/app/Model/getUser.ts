import { Role } from "./Role";

export interface getUser {
    uId: string;
    fName:string;
    lName:string;
    email:string;
    address:string;
    gender: string;
    image: string;
    password:string;
    contact:string;
    role : Role[];
}