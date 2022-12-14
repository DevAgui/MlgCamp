import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment.model';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  private _assignment:Assignment[] = [
    {
      id:1,
      instructorId:1,
      groupId:1,
      activityId:1,
      dateTime:moment().toISOString(),
    },
    {
      id:2,
      instructorId:3,
      groupId:2,
      activityId:2,
      dateTime:moment().toISOString(),
    }
  ];

  private _assignmentSubject:BehaviorSubject<Assignment[]> = new BehaviorSubject(this._assignment);
  public assignment$ = this._assignmentSubject.asObservable();


  id:number = this._assignment.length+1;
  constructor() {

  }

  getAssignments(){
    
    return this._assignment;
  }

  getAssignmentById(id:number){
    return this._assignment.find(a=>a.id==id);
  }

  getAssignmentsByActivityId(activityId:number):Assignment[]{
    return this._assignment.filter(a=>a.activityId == activityId);
  }

  getAssignmentsByInstructorId(instructorId:number):Assignment[]{
    return this._assignment.filter(a=>a.instructorId == instructorId);
  }

  getAssignmentsByGroupId(groupId:number):Assignment[]{
    return this._assignment.filter(a=>a.instructorId == groupId);
  }

  deleteAssignmentById(id:number){
    this._assignment = this._assignment.filter(a=>a.id != id); 
    this._assignmentSubject.next(this._assignment);
  }

  addAssignment(assingment:Assignment){
    assingment.id = this.id++;
    this._assignment.push(assingment);
    this._assignmentSubject.next(this._assignment);
  }

  updateAssignment(assignment:Assignment){
    var _assignment = this._assignment.find(a=>a.id==assignment.id);
    if(_assignment){
      _assignment.activityId = assignment.activityId;
      _assignment.instructorId= assignment.instructorId;
      _assignment.groupId= assignment.groupId;
      _assignment.createdAt = assignment.createdAt;
      _assignment.dateTime = assignment.dateTime;
    }
    this._assignmentSubject.next(this._assignment);
    
  }
}
