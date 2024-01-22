/*import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/interfaces/Product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  setDiscountStartTime(product: Product, startTime: string): void {
    product.discountStartTime = new Date(startTime);
    this.productService.updateProduct(product).subscribe(updatedProduct => {
      console.log(`Discount start time updated for ${updatedProduct.name}`);
    });
  }
}
*/
