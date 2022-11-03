import { Component, OnInit } from '@angular/core';

//firebase imports
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserInfo } from 'firebase/auth';
import { SnackService } from 'src/app/services/snack.service';

export interface Image{
  url?: string,
  caption?: string,
  fileName?:string
}

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {
  imageSrc!: string;

  private imageCollection!: AngularFirestoreCollection<Image>;
  images!: Observable<Image[]>;
  image!: Image;
  currentUser!: UserInfo;

  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    public snackService:SnackService
  )
  {
    this.afAuth.currentUser.then((user) => {
      if (user) {
        this.currentUser = user;
        this.imageCollection = this.firestore.collection<Image>(`Users/${this.currentUser.uid}/Images`);
        this.images = this.imageCollection.valueChanges();
      }
    })

  }

  addImage(image: Image) {
    this.imageCollection.add(image);
  }

  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement
    const files = (target.files as FileList);

    for (let index = 0; index < files.length; index++) {
        console.log(files[index].type.includes("image"))
      if (files[index].type.includes("image")) {
        const filePath = `users/${this.currentUser.uid}/images/${files[index].name}`;
        const task = this.storage.upload(filePath, files[index])
          .then((resp) => {
            resp.ref.getDownloadURL().then((url) => {
              this.image = { url: url, caption: "", fileName:files[index].name }
            }).finally(() => {
              this.addImage(this.image)
              this.snackService.userMessage("Image Uploaded")
            })
          })
      } else {
        console.log('file must be an image')
      }


    }
  }

  ngOnInit(): void {
  }

}
