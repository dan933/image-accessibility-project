import { Component, OnInit } from '@angular/core'
import { AngularFireStorage } from '@angular/fire/compat/storage';

// Firebase imports
//import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage'
import { listAll } from 'firebase/storage';

import { Observable } from 'rxjs';

// export interface Car {
//   Make:string
// }


@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.scss']
})
export class ImagePageComponent implements OnInit {

  //cars$!: Observable<Car[]>;

  images: string[] = [];

  constructor(
    private storage: AngularFireStorage
    //firestore: Firestore
  ) {
    //const data:any = collection(firestore, 'cars');
    //this.cars$ = collectionData(data);

  }

  //This is where you store the file names and download url's
filelist:any = []

//This is the function you call (put it in ngOnInit or something of the like) to get the filenames
getFileList() {

  const storageRef = this.storage.ref('images');

  storageRef.listAll()
    .subscribe({
      next: (resp) => {
        resp.items.forEach((imageRef) => {
          imageRef.getDownloadURL().then((url) => {
            this.images.push(url)
          }).finally(() => {console.log(this.images)})
        })
      }
  })
}

  speech_voices: any;

  ngOnInit(): void {
    this.getFileList();
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
