import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { usersserviceService } from '../../admin/usersservice.service';
import { Users } from '../../model/users.type';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;
  isLoggedIn: boolean = false;
  userName: string | null = null;

  constructor(private usersService: usersserviceService) {}

  onSubmit() {
    this.usersService.login(this.email, this.password).subscribe({
      next: (user) => {
        if (user) {
          this.isLoggedIn = true;
          this.userName = user.login;
          this.errorMessage = null;
        } else {
          this.errorMessage = 'Email ou senha incorretos.';
          this.isLoggedIn = false;
        }
      },
      error: (err) => {
        this.errorMessage = 'Falha no login: ' + err;
        this.isLoggedIn = false;
      },
    });
  }

  logout() {
    this.isLoggedIn = false;
    this.userName = null;
    this.email = '';
    this.password = '';
    this.errorMessage = null;
  }
}
