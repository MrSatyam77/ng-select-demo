//External imports
import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  //public variable
  public options = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jose' }
  ]
  public employeeDetailsFormData:any | FormGroup; //use to make a from group

  constructor(private fb: FormBuilder){}
  
   /**
* @author Satyam Jasoliya
* @createdDate 19-01-2021
* @description this function is used create reactive form
* @memberof AppComponent
*/
  private employeeDetailsForm(){
    this.employeeDetailsFormData = this.fb.group({
      name: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(){
    this.employeeDetailsForm(); //Initialise form
  }
}
