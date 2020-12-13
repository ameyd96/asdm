import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
firstName=''
lastName=''
address=''
phone=0
email=''
  constructor() { }

  ngOnInit(): void {
  }

  onSignUp(){
    console.log(`First Name:${this.firstName}`)
    console.log(`Last Name:${this.lastName}`)
    console.log(`Address:${this.address}`)
    console.log(`Phone:${this.phone}`)
    console.log(`Email:${this.email}`)
  }
  onCancel(){
    this.firstName=''
    this.lastName=''
    this.address=''
    this.phone=0
    this.email=''
  }
}
