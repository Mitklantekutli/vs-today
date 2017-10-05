import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  public model : any = {login:'vlad', password: ''};

  constructor(
    public ref: MdDialogRef<LoginDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) {

  }

  ngOnInit() {
  }

  closeDialog() : void {
    this.ref.close(this.model);
  }

  showLogin() : void {
  }
}
