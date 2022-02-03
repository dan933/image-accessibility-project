import { Component, OnInit } from '@angular/core';

import { DndDirective } from '../../directives/dnd.directive';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fileBrowseHandler(files: Event) {
    console.log(files);

  }

}
