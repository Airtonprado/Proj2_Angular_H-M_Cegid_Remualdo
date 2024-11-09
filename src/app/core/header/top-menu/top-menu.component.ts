import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent {
  logo: string = 'logo.png';
  onLogoClick() {
    console.log('Logo clicked!');
  }
}
