import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDataComponentComponent } from './input-data-component.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [InputDataComponentComponent],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
  ],
  exports : [InputDataComponentComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputDataComponentModule { }