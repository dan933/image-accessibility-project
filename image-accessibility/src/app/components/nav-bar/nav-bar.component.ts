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

    if (background.style.opacity == '1') {
      background.style.visibility = 'hidden';
      background.style.opacity = '0'

    } else {
      background.style.visibility = 'visible';
      background.style.opacity = '1';
    }

    let subMenu: HTMLStyleElement = document.querySelector('.compact-sub-menu')!;
    console.log(subMenu)

    if (subMenu.style.opacity == '1') {
      subMenu.style.opacity = '0'
      subMenu.style.visibility = 'hidden';

    } else {
      subMenu.style.visibility = 'visible';
      subMenu.style.opacity = '1';
    }

  }

}
