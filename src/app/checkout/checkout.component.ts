import { SalesOrderService } from './../Services/sales-order.service';
import { SalesOrder } from './../Model/SalesOrder';
import { AuthService } from './../Services/auth.service';
import { Cart } from './../Model/Cart';
import { CartService} from './../Services/cart.service';
import { Component, OnInit} from '@angular/core';
import { Product} from '../Model/Product';
import { getUser } from '../Model/getUser';
import { OrderItem } from '../Model/OrderItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartList: Cart[] = [];
  cartListLength
  total = 0;
  product: Product = < Product > new Object();
  validCheckout:boolean = false;
  email = sessionStorage.getItem("email")
  user:getUser=<getUser> new Object();

  constructor(private cartService: CartService, private authService:AuthService, private salesService:SalesOrderService, private router:Router) {

  }

  ngOnInit() {
    this.authService.getUser(this.email).subscribe(user => {
      this.user = user;
    })
    this.cartService.getCartItems().subscribe(res => {
      this.cartList = res;
      this.cartListLength = this.cartList.length;
      
      this.calcTotal();
    })
  }

  calcTotal() {
    for (let cartItem of this.cartList) {
      this.total = cartItem.amount * cartItem.product.pPrice + this.total;
    }
  }

  checkout(){
    var salesOrder:SalesOrder =<SalesOrder> new Object();
    
      salesOrder.address = this.user.address;
      salesOrder.totalAmount = this.total;
      salesOrder.userId = this.user.uId;

    var orderItems:OrderItem[] = []
    for(let cartItem of this.cartList){
    var salesOrderItem:OrderItem =<OrderItem> new Object();
      salesOrderItem.product = cartItem.product;
      salesOrderItem.qty = cartItem.amount;
      
      orderItems.push(salesOrderItem);
    }

      salesOrder.orderItems = orderItems;
      
      this.salesService.addOrders(salesOrder).subscribe(order => {
        console.log(order)
        this.router.navigate(['myorders'])
      },
      err => console.log(err));

      this.cartService.deleteCartItemsByUser(this.user.email).subscribe(res => console.log(res))
  }
}
