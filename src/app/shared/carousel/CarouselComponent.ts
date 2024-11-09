import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import bootstrap from '../../../main.server';
import { matMenuAnimations } from '@angular/material/menu';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  img1: string = '/slider1.jpg';
  img2: string = '/slider2.jpg';
  img3: string = '/slider3.jpg';
  img4: string = '/slider4.jpg';
}
