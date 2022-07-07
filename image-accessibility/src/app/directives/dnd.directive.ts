import { Directive, HostBinding, HostListener } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @HostBinding('class.fileover')
  fileOver!: Boolean;

  constructor(
    private storage: AngularFireStorage,
  ) { }

  uploadFile(files: FileList) {

    for (let index = 0; index < files.length; index++) {

      const filePath = `images/${files[index].name}`;
      const task = this.storage.upload(filePath, files[index]);
    }
  }

  //source https://medium.com/@tarekabdelkhalek/how-to-create-a-drag-and-drop-file-uploading-in-angular-78d9eba0b854

  //Drag Over listener
  @HostListener('dragover', ['$event']) onDragOver(evt:Event) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  //Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt:Event) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  //Drop Listener
  @HostListener('drop', ['$event']) public ondrop(evt:any) {
    evt.preventDefault();
    evt.stopPropagation();

    this.fileOver = false;

    const files = evt.dataTransfer.files as FileList;
    if (files.length > 0) {
      this.uploadFile(files)
    }
  }



}
