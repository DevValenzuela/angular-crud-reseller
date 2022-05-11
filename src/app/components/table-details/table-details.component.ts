import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Product} from '../../service/product.service';
import {Observable} from 'rxjs';
import {ProductModel} from '../../interface/product.interface';
import {StateProduct} from '../../enum/state-product.enum';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.sass']
})

export class TableDetailsComponent implements OnInit {

  listProduct: readonly ProductModel[] = [];
  statePosition = StateProduct;

  constructor(private productService: Product) { }

  ngOnInit(): void {
      this.loadData();
  }

  loadData(): void {
    const data: Observable<ProductModel[]> = this.productService.getProducts();
    data.subscribe(product => this.listProduct = product.reverse());
  }

}
