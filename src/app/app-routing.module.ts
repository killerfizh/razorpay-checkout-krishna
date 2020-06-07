import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RazorPayComponent } from './razor-pay/razor-pay.component';
import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LinkRazorpayGuard } from './link-razorpay.guard';

const routes: Routes = [
    {path: '', redirectTo: '/shop', pathMatch: 'full'},
    {path: 'rzp', component: RazorPayComponent, canActivate: [LinkRazorpayGuard]},
    {path: 'shop', component: ShoppingCartComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}