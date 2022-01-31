import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(hamburgerButton: HTMLElement) {
    hamburgerButton.classList.toggle("change");

    let background: HTMLStyleElement = document.querySelector('.compact-nav-background')!;
    background.style.opacity = background.style.opacity === '1' ? '0' :'1';

    let subMenu: HTMLStyleElement = document.querySelector('.compact-sub-menu')!;
    subMenu.style.opacity = subMenu.style.opacity === '1' ? '0' :'1';

  }

}
