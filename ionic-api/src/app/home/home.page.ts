import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  students: Student[] ;
  constructor(private studentService : StudentService) { }

  ngOnInit() {
    this.students=this.studentService.getAllStudent();
  }
  ionViewWillEnter(){
    this.students=this.studentService.getAllStudent();
  }

}