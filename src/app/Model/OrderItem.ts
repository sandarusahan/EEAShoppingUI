import { Product } from "./Product";
import { SalesOrder } from "./SalesOrder";

export class OrderItem {
    orderItemId : number;
    product:Product;
    salesOrder:SalesOrder;
    qty:number;
}