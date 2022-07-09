import { Component, Input, OnInit } from '@angular/core';

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

  @Input() image: Image = {id:'', caption:'', url:''};

  constructor() { }

  ngOnInit(): void {
  }

}
