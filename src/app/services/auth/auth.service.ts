import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginDialogComponent } from '../../components/login-dialog/login-dialog.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;

  constructor(private dialog: MatDialog, private auth: AngularFireAuth) {
    this.user = this.auth.user;
  }

  login() {
    this.dialog.open(LoginDialogComponent, {
      width: '370px',
    });
  }

  logout() {
    this.auth.signOut()
  }
}
