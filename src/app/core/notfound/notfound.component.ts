import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'], // Correção aqui: use 'styleUrls' no plural
})
export class NotfoundComponent {
  om4: string = '/OIP.jpeg';
  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigateByUrl('/');
  }
}
