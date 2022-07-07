import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

//firebase imports
import { Storage, StorageInstances, getStorage, ref, uploadBytesResumable, FirebaseStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {
  imageSrc!: string;

  constructor(
    private storage: AngularFireStorage,
  )
  {

  }

  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement
    const file = (target.files as FileList)[0];
    const filePath = 'images';
    const task = this.storage.upload(filePath, file);
  }

  ngOnInit(): void {
  }

  fileBrowseHandler(files: Event) {

    const reader = new FileReader();

    //todo check image format

    //gets images
    const element = files.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;

    //if not empty
    if (fileList) {
      reader.readAsDataURL(fileList[0]);
      console.log("FileUpload -> files", fileList);

      reader.onload = () => {
        this.imageSrc = reader.result as string;
        localStorage.setItem("img", this.imageSrc)
      }

    }
  }
}
