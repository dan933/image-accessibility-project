import { Directive, HostBinding, HostListener } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

//todo add different captions to different images
//todo cards for the images page
//todo drag and drop animations

export interface Image{
  url?: string,
  caption?: string,
  fileName?:string
}

@Directive({
  selector: '[appDnd]'
})

export class DndDirective {

  image!: Image;
  private imageCollection: AngularFirestoreCollection<Image>;
  images!: Observable<Image[]>;

  @HostBinding('class.fileover')
  fileOver!: Boolean;

  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore
  ) {
    this.imageCollection = firestore.collection<Image>('Images');
    this.images = this.imageCollection.valueChanges();
  }

  addImage(image: Image) {
    this.imageCollection.add(image);
  }

  uploadFile(files: FileList) {


    for (let index = 0; index < files.length; index++) {

      const filePath = `images/${files[index].name}`;
      const task = this.storage.upload(filePath, files[index])
        .then((resp) => {


          resp.ref.getDownloadURL().then((url) => {
            this.image = { url: url, caption: "", fileName:files[index].name}
          }).finally(() => { this.addImage(this.image) })
        })
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
