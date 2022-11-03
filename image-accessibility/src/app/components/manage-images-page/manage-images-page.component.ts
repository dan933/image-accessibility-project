import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { UserInfo } from 'firebase/auth';
import { Observable } from 'rxjs';

export interface Image {
  id:string,
  url: string,
  caption:string
}

@Component({
  selector: 'app-manage-images-page',
  templateUrl: './manage-images-page.component.html',
  styleUrls: ['./manage-images-page.component.scss']
})
export class ManageImagesPageComponent implements OnInit {

  images$!: Observable<Image[]>;
  images!: Image[];
  currentUser!: UserInfo;

  constructor(
    private firestore: Firestore,
    private afAuth: AngularFireAuth

  ) {
    this.afAuth.currentUser.then((user) => {
      if (user) {
        this.currentUser = user;
        const data: any = collection(this.firestore, `Users/${this.currentUser.uid}/Images`);
        this.images$ = collectionData(data, {idField:"id"});
      }
    })

   }

  ngOnInit(): void {
    this.images$.subscribe((resp) =>  {this.images = resp})
  }

}
