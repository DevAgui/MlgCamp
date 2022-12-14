import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChildrenGroup } from '../models/children-group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {


  private _group:ChildrenGroup[] = [
    {
      id:1,
      numberOfChildren:12,
      groupName:"B",
      legalGuardianNumber:"771943045",
      picture:"../assets/img/groupb.jpg"
    },
    {
      id:2,
      numberOfChildren:8,
      groupName:"A",
      legalGuardianNumber:"654399865",
      picture:"../assets/img/groupa.jpg"
    },
    {
      id:3,
      numberOfChildren:10,
      groupName:"C",
      legalGuardianNumber:"9874290113",
      picture:"../assets/img/groupc.jpg"
    }

  ];
  private _groupSubject:BehaviorSubject<ChildrenGroup[]> = new BehaviorSubject(this._group);
  public _group$ = this._groupSubject.asObservable();

  id:number = this._group.length+1;
  
  constructor() { 

  }

  //Getters y setters del servicio
  public getGroup(){
    return this._group;
  }

 public getGroupById(id:number){
    return this._group.find(g=>g.id==id);
  }

  deleteGroupById(id:number){
    this._group = this._group.filter(g=>g.id!=id);
    this._groupSubject.next(this._group);
  }

  addGroup(group:ChildrenGroup){
    group.id = this.id++;
    this._group.push(group);
    this._groupSubject.next(this._group);
  }

  updateGroup(group:ChildrenGroup){
    var _upGroup = this._group.find(g=>g.id==group.id);
    if(_upGroup){
      _upGroup.groupName = group.groupName;
      _upGroup.legalGuardianNumber = group.legalGuardianNumber;
      _upGroup.numberOfChildren = group.numberOfChildren;
      _upGroup.picture = group.picture;
      this._groupSubject.next(this._group);
    }
  }
}
