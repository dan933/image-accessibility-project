import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ImagePageComponent } from './components/image-page/image-page.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { DndDirective } from './components/upload-page/directives/dnd.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { environment } from 'src/environments/environment';

//firebase imports
import { provideFirebaseApp, initializeApp  } from '@angular/fire/app';
import { AngularFireStorageModule, BUCKET  } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


//forms imports
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';



//angular materials import
import { MaterialModule } from './modules/angular-modules';
import { SideNavListComponent } from './components/nav-bar/side-nav-list/side-nav-list.component';
import { ManageImagesPageComponent } from './components/manage-images-page/manage-images-page.component';
import { ManageImageCardComponent } from './components/manage-images-page/manage-image-card/manage-image-card.component';
import { initializeAppCheck, provideAppCheck, ReCaptchaV3Provider } from '@angular/fire/app-check';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ImagePageComponent,
    UploadPageComponent,
    DndDirective,
    SideNavListComponent,
    ManageImagesPageComponent,
    ManageImageCardComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFireStorageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: BUCKET, useValue: environment.firebaseConfig.storageBucket }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
