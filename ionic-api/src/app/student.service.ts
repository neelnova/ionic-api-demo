import { Injectable } from '@angular/core';
import { Student } from './home/student.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] =[
    {
      id:'r1',
      eno:'01'
    },
    {
      id:'r2',
      eno:'02'
    },
    {
      id:'r3',
      eno:'03'
    },  
    {
      id:'r4',
      eno:'04'
    }, 
    {
      id:'r5',
      eno:'05'
    }, 
    {
      id:'r6',
      eno:'06'
    }, 
  ];
  constructor(public http:HttpClient) { }


  getAllStudent(){
    return [...this.students];
  }
  getTododata(){
    var url="https://reqres.in/api/users";
    return this.http.get(url);
  }
 
}
