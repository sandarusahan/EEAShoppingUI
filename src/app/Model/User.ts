import { Role } from "./Role";

export interface User {
    uId: string;
    fName:string;
    lName:string;
    email:string;
    address:string;
    gender: string;
    image: string;
    password:string;
    contact:string;
    role : string;
}