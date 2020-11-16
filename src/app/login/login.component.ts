import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide : String;
  loginForm : FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.hide = "visibility_off";
    this.loginForm = new FormGroup(
      {
        email : new FormControl('',[Validators.required,Validators.email]),
        password : new FormControl('',[Validators.required,Validators.minLength(6)]), 
      }
    );
  }

  onLogin(){
    console.log("Login succeeded");
    this.router.navigate(['book']);
  }
}
