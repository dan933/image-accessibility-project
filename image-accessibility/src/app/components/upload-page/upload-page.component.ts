import { Component, OnInit } from '@angular/core';

//firebase imports
import { AngularFireStorage } from '@angular/fire/compat/storage';

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
    const files = (target.files as FileList);

    for (let index = 0; index < files.length; index++) {

      const filePath = `images/${files[index].name}`;
      const task = this.storage.upload(filePath, files[index]);
      console.log(task)
    }
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
