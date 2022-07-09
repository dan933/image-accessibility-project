import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
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

  constructor(
    //private storage: AngularFireStorage,
    private firestore: Firestore
  ) {
    const data: any = collection(this.firestore, 'Images');
    this.images$ = collectionData(data, {idField:"id"});
   }

  ngOnInit(): void {
    this.images$.subscribe((resp) =>  {this.images = resp, console.log(resp)})
  }

}
