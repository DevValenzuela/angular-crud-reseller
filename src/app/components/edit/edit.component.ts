import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductModel} from '../../interface/product.interface';
import {Product} from '../../service/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [`[nz-button]{
    margin-right: 8px;  margin-bottom: 12px;
  }`
  ]
})
export class EditComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
  validateForm!: FormGroup;

  @Output() loaderEdit: EventEmitter<any> = new EventEmitter();
  @Input('product') product!: ProductModel;

  constructor(private fb: FormBuilder,
              private productService: Product) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      id: [this.product.id],
      title: [this.product.title, [Validators.required]],
      count: [this.product.count, [Validators.required]],
      state: [this.product.state, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.productService.updateProduct(this.validateForm.value)
        .subscribe(res => {
          this.isVisible = false;
          this.loaderEdit.emit();
        });

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
