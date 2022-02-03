import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImagePageComponent } from './components/image-page/image-page.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';

const routes: Routes = [
  { path: 'images', component: ImagePageComponent },
  { path: 'upload', component: UploadPageComponent },
  {path: '', redirectTo: '/images', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
