import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

import { Product } from '../../service/product.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  isVisible = false;
  isOkLoading = false;
  validateForm!: FormGroup;

  @Output()
  loaderdata = new EventEmitter<string>();

  constructor(private fb: FormBuilder,
              private productService: Product) {}


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      count: [null, [Validators.required]],
      state: [null, [Validators.required]],
      agree: [false, [Validators.requiredTrue]]
    });

  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.productService.addProduct(this.validateForm.value)
        .subscribe(() => {
          this.isVisible = false;
          this.loaderdata.emit();
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
