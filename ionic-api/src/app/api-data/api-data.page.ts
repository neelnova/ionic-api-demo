import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { StudentService } from '../student.service'
@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.page.html',
  styleUrls: ['./api-data.page.scss'],
})
export class ApiDataPage implements OnInit {
  studentapi:any;
  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.studentService.getTododata().subscribe((getdata)=>{
      var anydata=<any>getdata;
      this.studentapi=anydata.data;
      console.log(this.studentapi);
    })
  }

}
