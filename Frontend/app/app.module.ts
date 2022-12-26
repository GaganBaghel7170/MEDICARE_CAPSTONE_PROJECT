import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; //Routes,

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminComponent } from './admin/admin.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { DiscountComponent } from './discount/discount.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { PdpComponent } from './pdp/pdp.component';
// import { SharedComponent } from './shared/shared.component';
// import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'user-login', component: UserLoginComponent },
//   { path: 'admin-login', component: AdminLoginComponent }

// ];

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminPageComponent,
    AdminComponent,
    CartItemComponent,
    CreateMedicineComponent,
    DiscountComponent,
    FileUploadComponent,
    HeaderComponent,
    HomeComponent,
    PaymentComponent,
    PdpComponent,
    // SharedComponent,
    // UpdateProductComponent,
    UpdateMedicineComponent,
    UpdateUserComponent,
    UserLoginComponent,
    UserPageComponent,
    UserRegisterComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule  
    // .forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
