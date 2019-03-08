import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  public user:string = 'Shashank';
  public form : FormGroup;
  public formArray: FormArray;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(this.user,Validators.required),
      password: new FormControl(),
      contact: new FormGroup({
        phone: new FormControl('',Validators.required),
        email: new FormControl('', Validators.email)
      }),
      hobbies: this.fb.array([])
    });

    this.form = this.fb.group({
      username:[this.user,[Validators.required,Validators.maxLength(8)]],
      password:[],
      contact: this.fb.group({
        phone:['',Validators.required],
        email:['',Validators.email]
      }),
      hobbies: ['Mast'],
      hobbyArray: this.fb.array([])
    });
  }
  
  public onSubmit(){
    console.log(this.form);
  }

  public addHobby(hobby:HTMLInputElement){    
    this.formArray = this.hobbyArray;
    this.formArray.push(
      this.fb.control(hobby.value)
    );
    hobby.value = '';
    console.log("Form Array",this.formArray);
  }

  get username(){
    return this.form.get('username')
  }

  get hobbyArray(){
    return this.form.get('hobbyArray') as FormArray;
  }

}
