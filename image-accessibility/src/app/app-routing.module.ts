import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImagePageComponent } from './components/image-page/image-page.component';
import { ManageImagesPageComponent } from './components/manage-images-page/manage-images-page.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { AuthGuard } from './components/user/auth.guard';

const routes: Routes = [
  { path: 'images', component: ImagePageComponent, canActivate:[AuthGuard] },
  { path: 'upload', component: UploadPageComponent, canActivate:[AuthGuard] },
  { path: 'manage', component: ManageImagesPageComponent, canActivate: [AuthGuard] },
  {
    path: 'login', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },
  { path: '**', redirectTo:'images'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
