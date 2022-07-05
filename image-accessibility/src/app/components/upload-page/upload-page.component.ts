import { Component, OnInit } from '@angular/core';

import { DndDirective } from '../../directives/dnd.directive';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {
  imageSrc!: string;

  constructor() { }

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
