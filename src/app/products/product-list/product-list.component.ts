import { ProductManagerComponent } from './../../admin/product-manager/product-manager.component';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Products } from '../../model/product.type';
import { produtos } from '../../dados/produtos';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    FormsModule,
    ProductManagerComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  imgFolder: string = 'imagens'; // Corrigido para o caminho correto
  cardsInfo: Products[] = produtos;
  @Input() info!: Products;
  @Output() verMaisClick = new EventEmitter<number>();

  constructor(private router: Router) {}
  verMais(id: number) {
    this.verMaisClick.emit(id);
  }
  @Output() handleSearchValue = new EventEmitter<string>();

  searchValue: string = '';

  searchProduto() {
    console.log(this.searchValue);
    this.handleSearchValue.emit(this.searchValue);
  }

  clearSearch() {
    this.searchValue = '';
    this.searchProduto();
  }
}
