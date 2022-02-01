import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.scss']
})
export class ImagePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  speech(image: HTMLElement) {
    let soundToPlay = image.getAttribute('alt')!;
    let speech = new SpeechSynthesisUtterance(soundToPlay);

    speechSynthesis.speak(speech);

    speechSynthesis.getVoices().forEach((voice) => {
      console.log(voice)
    });




  }

}
