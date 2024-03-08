import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { StorageService } from '../service/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(router: Router, private storageService: StorageService)
  loginForm: FormGroup;

  this.loginForm = new FormGroup({
    userName: new FormControl('', validators.required),
    password: new FormControl('', validators.required)
  })

onsubmit(){
  if (this.loginForm.valid) {
    console.log('formvalue', this.loginForm.value);
    this.router.navigateByUrl('dashboard');
    this.storageService.saveData('name', this.loginForm.value.name)
    this.storageService.saveDataSession('name', this.loginForm.value.name)

  }
}
}
