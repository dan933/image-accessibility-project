import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImagePageComponent } from './components/image-page/image-page.component';

const routes: Routes = [
  {path: 'images', component: ImagePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
