import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Products } from '../../model/product.type';

@Component({
  selector: 'app-product-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss'],
})
export class ProductManagerComponent {
  @Input() productList: Products[] = [];

  @Output() handlerDeleteProducts = new EventEmitter<number>();

  @Output() handlerShowInfo = new EventEmitter<number>();
  produto: any;

  deleteProduto1(id: number, event: MouseEvent) {
    // console.log(id);
    this.handlerDeleteProducts.emit(id);
    event.stopPropagation();
  }

  showProdutoInfo(id: number) {
    // console.log(id);
    this.handlerShowInfo.emit(id);
  }
}
