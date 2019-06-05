import { Product } from './Product';
export interface Cart {
    id : string;
    amount : number;
    userEmail : string;
    product:Product
}