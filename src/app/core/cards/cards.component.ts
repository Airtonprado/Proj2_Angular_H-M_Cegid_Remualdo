import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router'; // Corrigido para o Router do Angular
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Products } from '../../model/product.type';
import { produtos } from '../../dados/produtos';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  imgFolder: string = 'imagens'; // Corrigido para o caminho correto
  cardsInfo: Products[] = produtos;
  @Input() info!: Products;
  @Output() verMaisClick = new EventEmitter<number>();
  details: any;

  constructor(private router: Router) {}

  verMais(id: number) {
    this.verMaisClick.emit(id);
  }
}
