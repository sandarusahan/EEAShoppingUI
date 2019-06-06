import { OrderItem } from "./OrderItem";

export class SalesOrder {
    orderId:number;
    userId:string;
    orderDate:Date;
    address:string;
    totalAmount:number;
    orderItems:OrderItem[];

}
