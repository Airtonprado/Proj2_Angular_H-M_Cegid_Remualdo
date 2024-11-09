import { Component } from '@angular/core';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { CarouselComponent } from '../shared/carousel/CarouselComponent';
import { CardsComponent } from '../core/cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    CardsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
