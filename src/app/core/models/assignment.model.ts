
export interface Assignment{
    id:number;
    instructorId:number;
    groupId:number;
    activityId:number;
    createdAt?:string; // ISO 8601 YYYY-MM-DDTHH:mm:ss+HH:MM
    dateTime:string; // ISO 8601 YYYY-MM-DDTHH:mm:ss+HH:MM
}