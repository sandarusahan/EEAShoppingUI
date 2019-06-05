import { Promotion } from "./Promotion";


export interface Product {
    pId: string;
    pName:string;
    pCategory:string;
    pDescription:string;
    pPrice: number;
    pQty:number;
    pImg:string;
    promotion:Promotion

}