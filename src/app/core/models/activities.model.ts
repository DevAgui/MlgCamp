export interface Activities {
    id:number;
    name:string;
    location:string;
    lat:number;
    lng:number;
    activityTime?:string;// ISO 8601 YYYY-MM-DDTHH:mm:ss+HH:MM
    picture?:string;

}