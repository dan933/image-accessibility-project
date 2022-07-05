import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ImagePageComponent } from './components/image-page/image-page.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { DndDirective } from './directives/dnd.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment';

//firebase imports
import { AngularFireModule } from '@angular/fire/compat';


import { MaterialModule } from './modules/angular-modules';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ImagePageComponent,
    UploadPageComponent,
    DndDirective
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
