import { Component, OnInit } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';

// Firebase imports
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage'
import { UserInfo } from 'firebase/auth';
import { listAll, updateMetadata } from 'firebase/storage';

import { Observable } from 'rxjs';

// export interface Car {
//   Make:string
// }

export interface Image {
  id:string,
  url: string,
  caption:string
}


@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.scss']
})
export class ImagePageComponent implements OnInit {

  //cars$!: Observable<Car[]>;

  images$!: Observable<Image[]>;
  images!: Image[];
  currentUser!: UserInfo;

  constructor(
    private storage: AngularFireStorage,
    private firestore: Firestore,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.currentUser.then((user) => {
      if (user) {
        this.currentUser = user;
        const data: any = collection(this.firestore, `Users/${this.currentUser.uid}/Images`);
        this.images$ = collectionData(data, { idField: "id" });
      }
    })


  }

  speech_voices: any;

  ngOnInit(): void {
    this.images$.subscribe((resp) =>  {this.images = resp})
    var speech_voices;
    if ('speechSynthesis' in window) {
      speech_voices = window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = function() {
        speech_voices = window.speechSynthesis.getVoices();
      };
    }
  }

  speech(image: HTMLElement) {
    let soundToPlay = image.getAttribute('alt')!;
    let speech = new SpeechSynthesisUtterance(soundToPlay);
    speech.pitch = 1;
    speech.rate = 1;
    speech.voice = this.chooseSpeechVoice(2);
    speechSynthesis.speak(speech);
  }

  chooseSpeechVoice(index: number) {
    let voice = speechSynthesis.getVoices()[index];
    return voice;
  }

}
