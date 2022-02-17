import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginData } from './login-dialog'

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent{
  data: LoginData = {} as LoginData;
  errorMessage: string;
  isFetchingData = false;
  constructor(private readonly dialogRef: MatDialogRef<LoginDialogComponent>, private auth: AngularFireAuth) { }

  login() {
    this.isFetchingData = true;
    this.errorMessage = undefined;
    this.auth.signInWithEmailAndPassword(this.data.email, this.data.password)
    .then(() => this.dialogRef.close(true))
    .catch(e => {
      this.errorMessage = e.message;
    })
    .finally(() => this.isFetchingData = false)
  }

  cancel() {
    this.dialogRef.close(false)
  }
}
