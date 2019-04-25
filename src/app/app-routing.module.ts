import { ProductDetailsComponent } from './product-details/product-details.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'admin/products/new', component: AddProductsComponent},
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cart/checkout', component: CheckoutComponent},
  {path: 'my/orders', component: MyOrdersComponent},
  {path: 'order-sucess', component: OrderSucessComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/orders', component: AdminOrdersComponent},
  {path: 'admin/products', component: AdminProductsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
