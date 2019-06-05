import { Product } from './Product';
export class Promotion {
    promoId:string
    percentage:number
    duration:number
    promoName:string
    startDate:Date
    endDate:Date
    products:Product[]
}