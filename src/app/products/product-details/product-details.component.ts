import { Router, RouterModule, RouterOutlet } from '@angular/router'; // Importação correta
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../../model/product.type';
import { produtos } from '../../dados/produtos';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    RouterModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    RouterOutlet,
  ],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  imgFolder: string = 'imagens'; // Corrigido para o caminho correto
  cardsInfo: Products[] = produtos;
  @Input() info!: Products;
  @Output() verMaisClick = new EventEmitter<number>();

  constructor(private router: Router) {}
  verMais(id: number) {
    this.verMaisClick.emit(id);
  }
}
