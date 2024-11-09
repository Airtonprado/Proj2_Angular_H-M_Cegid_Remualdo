import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopMenuComponent } from './top-menu/top-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, TopMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isAuthenticated = false;

  logout() {
    this.isAuthenticated = false;
    console.log('Usuário desconectado.');
  }
}
