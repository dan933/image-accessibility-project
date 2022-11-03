import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.scss']
})
export class SideNavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(
    private router:Router,
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public logout = async () => {
    this.afAuth.signOut().finally(() => {
      this.sidenavClose.emit();
      this.router.navigate(['/login'])
    })
  }

}
