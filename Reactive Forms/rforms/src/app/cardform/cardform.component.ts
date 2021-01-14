import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators}from '@angular/forms';
import {DateFormControl}from '../date-form-control';
@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.css']
})
export class CardformComponent implements OnInit {
cardForm =new FormGroup({
  name : new FormControl('',[Validators.required,
                             Validators.minLength(3),
                            ]),
  cardNumber:new FormControl('',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]),
  expiration:new DateFormControl('',[Validators.required,Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)  ]),
  securityCode:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(4)])
});
  constructor() { }

  ngOnInit(): void {
  }
   onSubmit(){
     console.log('Form was submitted');
   }
   onResetClick(){
     this.cardForm.reset();
   }
}
