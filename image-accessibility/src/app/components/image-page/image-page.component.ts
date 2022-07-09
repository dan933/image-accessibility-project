import { Component, OnInit } from '@angular/core'
import { AngularFireStorage } from '@angular/fire/compat/storage';

// Firebase imports
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage'
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

  constructor(
    private storage: AngularFireStorage,
    private firestore: Firestore
  ) {
    const data: any = collection(this.firestore, 'Images');
    this.images$ = collectionData(data, { idField: "id" });

  }

  // getFileList() {
  //   const storageRef = this.storage.ref('images');
  //   storageRef.listAll()
  //     .subscribe({
  //       next: (resp) => {
  //         resp.items.forEach((imageRef) => {

  //           imageRef.getDownloadURL().then((url) => {
  //             this.images.push({url:url, caption:"hi"})
  //           })
  //         })
  //       }
  //   })
  // }

  speech_voices: any;

  ngOnInit(): void {
    this.images$.subscribe((resp) =>  {this.images = resp, console.log(resp)})
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
    console.log(speech.voice)

    speechSynthesis.speak(speech);
  }

  chooseSpeechVoice(index: number) {
    let voice = speechSynthesis.getVoices()[index];
    console.log(voice)
    return voice;

  }

}
