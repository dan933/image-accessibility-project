import { Component, OnInit } from '@angular/core';

//firebase imports
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Image{
  url?: string,
  caption?:string
}

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {
  imageSrc!: string;

  private imageCollection: AngularFirestoreCollection<Image>;
  images!: Observable<Image[]>;
  image!: Image;

  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore
  )
  {
    this.imageCollection = firestore.collection<Image>('Images');
    this.images = this.imageCollection.valueChanges();
  }

  addImage(image: Image) {
    this.imageCollection.add(image);
  }

  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement
    const files = (target.files as FileList);

    for (let index = 0; index < files.length; index++) {


      const filePath = `images/${files[index].name}`;
      const task = this.storage.upload(filePath, files[index])
        .then((resp) => {


          resp.ref.getDownloadURL().then((url) => {
            this.image = { url: url, caption: "" }
          }).finally(() => { this.addImage(this.image) })
        })
    }
  }

  ngOnInit(): void {
  }

}
