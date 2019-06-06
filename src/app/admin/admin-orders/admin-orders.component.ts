import { User } from './../../Model/User';
import { SalesOrder } from './../../Model/SalesOrder';
import { Component, OnInit } from '@angular/core';
import { SalesOrderService } from 'src/app/Services/sales-order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orders:SalesOrder[] = []
  constructor(private orderService:SalesOrderService) { }

  user:User=<User> new Object();
  ngOnInit() {
    
    this.orderService.getAllOrders().subscribe(orders => {
      this.orders = orders;
    }, err => console.log("getting orders failed !!"))
  }

  delivered(i){
    this.orders.splice(i, 1)
  }

}
