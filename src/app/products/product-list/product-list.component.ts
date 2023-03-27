import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  // template: `<h1>{{title}}</h1>`,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title = 'Products';
  selectedProduct = '';

  onBuy(name: string) {
    window.alert(`You bought the ${name} !`);
  }
}
