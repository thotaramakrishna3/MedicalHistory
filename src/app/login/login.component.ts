import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name!:string;
  userId!:string;
  email!:string;
  phone!:string;
  password!:string;
  cpassword!:string;
  gender!:string;

  //constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.name,
      this.userId,
      this.email,
      this.phone,
      this.password,
      this.cpassword,
      this.gender)
 /*   this.registerService.registerUser(this.user).subscribe(data=>{
     alert("Successfully User is register?")
    },error=>alert("Sorry User not register"));
  }*/
  }
}
