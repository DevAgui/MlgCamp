import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChildrenGroup } from '../models/children-group.model';
import { instructor } from '../models/instructor.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {


  private _instructor:instructor[] = [
    {
      id:1,
      name:"Juan",
      surname:"Sánchez",
      number:"794137041",
      picture:"../assets/img/juansanchez.jpg"
    },
    {
      id:2,
      name:"Begoña",
      surname:"Pascual",
      number:"6634134040",
      picture:"../assets/img/begoñapascual.jpg"
    },
    {
      id:3,
      name:"Pedro",
      surname:"García",
      number:"999117341",
      picture:"../assets/img/pedrogarcia.jpg"
    }

  ];
  private _instructorSubject:BehaviorSubject<instructor[]> = new BehaviorSubject(this._instructor);
  public _instructor$ = this._instructorSubject.asObservable();

  id:number = this._instructor.length+1;
  
  constructor() { 

  }

  //Getters y setters del servicio
  public getInstructor(){
    return this._instructor;
  }

 public getInstructorById(id:number){
    return this._instructor.find(i=>i.id==id);
  }

  deleteInstructorById(id:number){
    this._instructor = this._instructor.filter(i=>i.id!=id);
    this._instructorSubject.next(this._instructor);
  }

  addInstructor(instructor:instructor){
    instructor.id = this.id++;
    this._instructor.push(instructor);
    this._instructorSubject.next(this._instructor);
  }

  updateInstructor(instructor:instructor){
    var _upInstructor = this._instructor.find(i=>i.id==instructor.id);
    if(_upInstructor){
      _upInstructor.name = instructor.name;
      _upInstructor.surname = instructor.surname;
      _upInstructor.number = instructor.number;
      _upInstructor.picture = instructor.picture;
      this._instructorSubject.next(this._instructor);
    }
  }
}