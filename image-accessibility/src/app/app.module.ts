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
import { provideFirebaseApp, initializeApp,  } from '@angular/fire/app';
import { AngularFireStorageModule, BUCKET  } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage'
import { Firestore } from '@angular/fire/firestore';


//angular materials import
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
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFireStorageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: BUCKET, useValue: environment.firebaseConfig.storageBucket }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
