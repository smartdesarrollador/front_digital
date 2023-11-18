import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/login/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  submitted = false;
  data:any;
  token:any;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,private dataService:DataService) {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      }
    );
  }

  ngOnInit(): void {}

  get email() {
    return this.form.get('email') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

  this.dataService.login(this.form.value).subscribe(res => {
    this.data = res;
    if(this.data.status === 1){
      
    }
  })
  }


}
