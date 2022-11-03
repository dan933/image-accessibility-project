import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const modules = [
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatSnackBarModule
];

@NgModule({
  imports: modules,
  exports: modules,
  providers:[]
})

export class MaterialModule{

}
