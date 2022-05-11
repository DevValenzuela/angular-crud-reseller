import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd/modal';
import {Product} from '../../service/product.service';
import {ProductModel} from '../../interface/product.interface';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styles: [`[nz-button]{
    margin-right: 8px;  margin-bottom: 12px;
  }`
  ]
})
export class DeleteComponent implements OnInit {

  @Input('product') product!: ProductModel;

  @Output() loaderDelete: EventEmitter<any> = new EventEmitter();

  constructor(private modal: NzModalService,
              private productService: Product) { }

  ngOnInit(): void {
  }

  deleteOk(): void{
    const id = this.product.id;
    this.productService.deleteProduct(id)
      .subscribe(res => {
        this.loaderDelete.emit();
      });
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this task?',
      nzContent: '<b style="color: red;">Do you want to delete this item</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteOk(),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
