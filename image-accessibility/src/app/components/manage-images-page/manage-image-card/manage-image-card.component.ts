import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { collection, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Image{
  id: string,
  url:string,
  caption: string
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
  item: Observable<Image|undefined>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.itemDoc = afs.doc<Image|undefined>('Images/kobnjb8OP3UfR27PD9Ku')
    this.item = this.itemDoc.valueChanges()
  }

  ngOnInit(): void {
    this.caption = this.image.caption;
  }

  saveCaption() {
    this.itemDoc.update({caption:this.caption})
  }

}
