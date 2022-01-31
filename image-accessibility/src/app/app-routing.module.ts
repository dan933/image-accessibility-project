import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImagePageComponent } from './components/image-page/image-page.component';

const routes: Routes = [
  { path: 'images', component: ImagePageComponent },
  {path: '', redirectTo: '/images', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
