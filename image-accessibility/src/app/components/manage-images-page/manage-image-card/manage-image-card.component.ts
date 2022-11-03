import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

export interface Image{
  id: string,
  url:string,
  caption: string,
  fileName?:string
}

@Component({
  selector: 'app-manage-image-card',
  templateUrl: './manage-image-card.component.html',
  styleUrls: ['./manage-image-card.component.scss']
})


export class ManageImageCardComponent implements OnInit {

  @Input() image: Image = { id: '', caption: '', url: '' };

  caption!: string;

  private itemDoc!: AngularFirestoreDocument<Image|undefined>;
  item!: Observable<Image|undefined>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
  ) {

  }

  ngOnInit(): void {
    this.caption = this.image.caption;
  }

  getFileList() {
    this.afs.collection('Images', ref => ref.where('fileName', '==', this.image.fileName)).valueChanges()
    .subscribe(
      (resp) => {
        if (resp.length <= 0) {
          const storageRef = this.storage.ref(`images/${this.image.fileName}`)
          storageRef.delete();
        }
      }
    )
  }

  saveCaption() {
    this.itemDoc = this.afs.doc<Image|undefined>(`Images/${this.image.id}`)
    this.item = this.itemDoc.valueChanges()
    this.itemDoc.update({ caption: this.caption })
  }

  delete() {
    this.itemDoc = this.afs.doc<Image | undefined>(`Images/${this.image.id}`)
    this.itemDoc.delete()
      .finally(
        () => {
          this.getFileList()
        }
      );
  }

}
