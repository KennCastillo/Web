import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular CRUD';
  msg:string = '';

  employees = [
  {'name': 'Colli', position: 'Manager', email:'colli@abrhil.com'},
  {'name': 'Kenn', position: 'Programmer', email:'kenn@abrhil.com'},
  {'name': 'Yisus', position: 'Tester', email:'yisus@abrhil.com'}
  ];

  model:any = {};
  model2:any = {};

  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg = 'The record has been saved'
  }

  deleteEmployee(i):void{
    var answer = confirm('Are you sure to delete it?');
    console.log(answer);
    if(answer){
      this.employees.splice(i, 1);
      this.msg = 'The record has been deleted';
    }
  }

  myValue;

  editEmployee(i):void{
    this.hideUpdate = false;

    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee():void{

    console.log(this.model2);

    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = 'Record is successfully updated';
      }
    }
  }

  closeAlert():void{
    this.msg = '';
  }


}
