import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @HostBinding('class.fileover')
  fileOver!: Boolean;

  constructor() { }

  //source https://medium.com/@tarekabdelkhalek/how-to-create-a-drag-and-drop-file-uploading-in-angular-78d9eba0b854

  //Drag Over listener
  @HostListener('dragover', ['$event']) onDragOver(evt:Event) {
    evt.preventDefault();
    evt.stopPropagation();

    console.log('Drag Over');
  }

  //Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt:Event) {
    evt.preventDefault();
    evt.stopPropagation();

    console.log('Drag Leave');
  }

  //Drop Listener
  @HostListener('drop', ['$event']) public ondrop(evt:Event) {
    evt.preventDefault();
    evt.stopPropagation();

    this.fileOver = false;
  }



}
