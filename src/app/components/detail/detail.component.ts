import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../interface/product.interface';
import {StateProduct} from '../../enum/state-product.enum';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [`[nz-button]{
    margin-right: 8px;  margin-bottom: 12px;
  }`
  ]
})
export class DetailComponent implements OnInit {

  isVisible = false;
  isOkLoading = false;
  statePosition = StateProduct;

  @Input('product') product!: ProductModel;

  constructor() { }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
