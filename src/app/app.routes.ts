import { HomeComponent } from './home/home.component';
import { ProductsModule } from './products/products.module';
import { LoginModalComponent } from './auth/login-modal/login-modal.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductManagerComponent } from './admin/product-manager/product-manager.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'home', redirectTo: '' },
  { path: 'auth/login', component: LoginModalComponent },
  { path: 'auth/register', component: RegisterComponent },
  {
    path: 'product/',
    component: ProductDetailsComponent,
    title: 'product',
  },
  { path: 'product1', component: ProductsModule, title: 'product1' },
  { path: 'products', component: ProductListComponent, title: 'products' },
  { path: 'produce', component: ProductManagerComponent, title: 'produce' },
  { path: '**', component: NotfoundComponent, title: 'Page not found' },
];
