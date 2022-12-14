import { Injectable } from "@angular/core";
import { BehaviorSubject, last } from "rxjs";
import { Activities } from "../models/activities.model";

@Injectable({
    providedIn:'root'
})
export class ActivitiesService{

    private _activities:Activities[] = [
        {
          id:1,
          name:"Senderismo",
          location:"Montes de Málaga",
          lat:36.8444441,
          lng:-4.370369,
          picture:"../assets/img/torcal_de_antequera.jpg"
        },
        {
          id:2,
          name:"Gymkana",
          location:"MlgCamp",
          lat:36.993308,
          lng:-4.520458,
          picture:"../assets/img/gymkana.jpg"
        },
        {
          id:3,
          name:"Actividad musical",
          location:"MlgCamp",
          lat:36.993308,
          lng:-4.520458,
          picture:"../assets/img/dancing.jpg"
        }
      ];
      private _activitiesSubject:BehaviorSubject<Activities[]> = new BehaviorSubject(this._activities);
      public _activities$ = this._activitiesSubject.asObservable();
    
      id:number = this._activities.length+1;

      constructor() { 
    
      }
    
      //Getters y setters del servicio
      public getActivity(){
        return this._activities;
      }
    
     public getActivityById(id:number){
        return this._activities.find(a=>a.id==id);
      }

      public getLat(id:number){
        return this._activities.find(a=>a.id==id).lat;
      }

      public getLng(id:number){
        return this._activities.find(a=>a.id==id).lng;
      }

      deleteActivityById(id:number){
        this._activities = this._activities.filter(a=>a.id!=id);
        this._activitiesSubject.next(this._activities);
      }
    
      addActivity(activities:Activities){
        activities.id = this.id++;
        this._activities.push(activities);
        this._activitiesSubject.next(this._activities);
      }
    
      updateActivity(activity:Activities){
        var _upActivity = this._activities.find(a=>a.id==activity.id);
        if(_upActivity){
            _upActivity.name = activity.name;
            _upActivity.location = activity.location;
            _upActivity.lat = activity.lat;
            _upActivity.lng = activity.lng;
            _upActivity.activityTime = activity.activityTime;
            _upActivity.picture = activity.picture;
          this._activitiesSubject.next(this._activities);
        }
      }
}