import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDetailsComponent } from './table-details/table-details.component';
import {ZorroModule} from '../zorro/zorro.module';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    TableDetailsComponent,
    DetailComponent,
    EditComponent,
    DeleteComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ZorroModule,
  ],
  exports: [
    TableDetailsComponent
  ]
})

export class ComponentsSharedModule { }
