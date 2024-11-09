import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../../model/users.type';
import { Router } from '@angular/router';
import { usersserviceService } from '../../admin/usersservice.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @Output() newUsers = new EventEmitter<Users>();

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: usersserviceService
  ) {
    this.registerForm = this.fb.group({
      login: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      morada: ['', Validators.required],
      caixaPostal: ['', Validators.required],
      pais: ['', Validators.required],
    });
  }

  insertUsers() {
    if (this.registerForm.invalid) {
      alert('O formulário é inválido!');
      return;
    }

    const user = this.registerForm.value as Users;

    this.usersService.newUsers(user).subscribe({
      next: () => {
        alert('Usuário cadastrado com sucesso!');
        this.newUsers.emit(user);
        this.router.navigate(['/home']);
        this.registerForm.reset();
      },
      error: (err: { message: string }) => {
        if (
          err.message === 'Este e-mail já está cadastrado. Use outro e-mail.'
        ) {
          alert(err.message);
        } else {
          console.error('Erro ao cadastrar usuário:', err);
        }
      },
    });
  }
}
