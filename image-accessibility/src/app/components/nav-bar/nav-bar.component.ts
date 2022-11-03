import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  async signOut() {
    await this.afAuth.signOut().then(() => {
      this.router.navigate(['/login'])
    })
  }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
