import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { UserInfo } from 'firebase/auth';
import { Observable } from 'rxjs';
import { SnackService } from 'src/app/services/snack.service';

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
  item!: Observable<Image | undefined>;
  currentUser!: UserInfo;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private afAuth: AngularFireAuth,
    public snackService:SnackService
  ) {

    this.afAuth.currentUser.then((user) => {
      if (user) {
        this.currentUser = user;
      }
    })

  }

  ngOnInit(): void {
    this.caption = this.image.caption;
  }

  getFileList() {
    this.afs.collection(`Users/${this.currentUser.uid}/Images`, ref => ref.where('fileName', '==', this.image.fileName)).valueChanges()
    .subscribe(
      (resp) => {
        if (resp.length <= 0) {
          const storageRef = this.storage.ref(`users/${this.currentUser.uid}/images/${this.image.fileName}`)
          storageRef.delete();
        }
      }
    )
  }

  saveCaption() {
    this.itemDoc = this.afs.doc<Image|undefined>(`Users/${this.currentUser.uid}/Images/${this.image.id}`)
    this.item = this.itemDoc.valueChanges()
    this.itemDoc.update({ caption: this.caption }).finally(() => {
      this.snackService.userMessage("Card Updated")
    })
  }

  delete() {
    this.itemDoc = this.afs.doc<Image | undefined>(`Users/${this.currentUser.uid}/Images/${this.image.id}`)
    this.itemDoc.delete()
      .finally(
        () => {
          this.getFileList()
          this.snackService.userMessage("Card Deleted")
        }
      );
  }

}
