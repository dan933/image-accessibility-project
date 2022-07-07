import { Component, OnInit } from '@angular/core'

// Firebase imports
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Car {
  Make:string
}


@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.scss']
})
export class ImagePageComponent implements OnInit {

  cars$!: Observable<Car[]>;

  constructor(
    firestore: Firestore
  ) {
    const data:any = collection(firestore, 'cars');
    this.cars$ = collectionData(data);

  }

  speech_voices: any;

  ngOnInit(): void {
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
