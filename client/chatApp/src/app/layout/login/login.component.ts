import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.model.username && this.model.password){
      localStorage.setItem("token","1");
      this.router.navigate(['/layout/dashboard']);
    }
  }

}
