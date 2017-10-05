import { Component, Inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MdDialog} from '@angular/material';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public authorized = false;
  public user = {login:'Vladislav', password:'eee'};
  public username;

  constructor(public dialog: MdDialog){

  }

  public login() {
    this.openDialog();
  }
  public logout() {
    this.authorized = false;
  }
  public openDialog() {
    var ref = this.dialog.open(LoginDialogComponent, {
        data: this.user,
    });
    ref.afterClosed().subscribe(result=>{
      this.authorized = true;
      this.user = result;
    });
  }

  public week1() {
    this.user.login += 'q';
  }
}
