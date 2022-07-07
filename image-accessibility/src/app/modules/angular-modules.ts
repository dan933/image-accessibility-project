import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

const modules = [
  MatIconModule,
  MatToolbarModule,
  MatButtonModule
];

@NgModule({
  imports: modules,
  exports: modules,
  providers:[]
})

export class MaterialModule{

}
