import { Component, EventEmitter, inject, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { CarouselComponent } from './shared/carousel/CarouselComponent';
import { TopMenuComponent } from './core/header/top-menu/top-menu.component';
import { HttpClient } from '@angular/common/http';
import { Users } from './model/users.type';
import { LoginModalComponent } from './auth/login-modal/login-modal.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductManagerComponent } from './admin/product-manager/product-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    TopMenuComponent,
    ReactiveFormsModule,
    LoginModalComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductManagerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ecommerce_hm';
  // http = inject(HttpClient);
  // users: any[] = [];

  // private apiUrl = 'http://localhost:3000';

  // ngOnInit() {
  //   this.getUsers().subscribe({
  //     next: (data: Users[]) => {
  //       this.users = data;
  //       console.log(data);
  //     },
  //     error: (error) => {
  //       console.error('There was an error retrieving the users', error);
  //     },
  //   });

  // this.postUsers().subscribe({
  //   next: (response) => {
  //     console.log('User added successfully', response);
  //     this.users.push(response); // Assuming the response contains the newly added user
  //   },
  //   error: (error) => {
  //     console.error('There was an error adding the user', error);
  //   }
  // });
}

// private getUsers() {
//   return this.http.get<Users[]>(`${this.apiUrl}/users`);
// }

// // private postUsers() {
// //   const newSUser = {

//     login: 'Game of Thrones1',
//     email: 'blabla'
//   };

//   return this.http.post(`${this.apiUrl}/users`, newSUser);
// }

// interface Users {
//     id: number;
//     login: string;
//     email: string;
//     password: string;
//     morada: string;
//     caixaPostal: string;
//     pais: string;
//   };
