// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-register',
//   templateUrl: './user-register.component.html',
//   styleUrls: ['./user-register.component.css']
// })
// export class UserRegisterComponent {

// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private uservice:UserService, private route:Router) { }

  user : User={
    id:0,
    name: '',
    email: '',
    password: '',
    phone: 0
  }
  

  ngOnInit(): void {

  }

  userRegistration(data : any){
    alert("Thank you for register with us "+data.name)
    this.user=data
    this.uservice.addUser(this.user).subscribe(res=>{
      if(res ==null){
        alert("Registration failed! Try Again..")
    }

    else{

      alert("User Registered Successfully! Go to Login Page")
      this.route.navigate(['user-login'])
    }
    })


  }

}