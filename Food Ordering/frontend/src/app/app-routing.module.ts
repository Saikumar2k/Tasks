import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Food } from './shared/models/Food';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { PaymentPageComponent } from './payment-page/payment-page.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
{path:'search/:searchTerm', component:HomeComponent},
{path:'tag/:tag', component:HomeComponent},
{path:'food/:id', component:FoodPageComponent},
{path:'cart-page',component:CartPageComponent},
{path:'login',component:LoginPageComponent},
{path:'register', component:RegisterPageComponent},
{path:'checkout', component:CheckoutPageComponent,canActivate:[AuthGuard]},
{path:'payment', component:PaymentPageComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
