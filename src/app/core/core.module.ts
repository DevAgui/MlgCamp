import { ElementRef, LOCALE_ID, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './components/group/group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorDetailComponent } from './components/instructor-detail/instructor-detail.component';
import { createTranslateLoader } from './utils/translate';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ActivitiesDetailComponent } from './components/activities-detail/activities-detail.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AssignmentDetailComponent } from './components/assignment-detail/assignment-detail.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { DateTimeToAssignComponent } from './components/date-time-to-assign/date-time-to-assign.component';
import { GroupToAssignComponent } from './components/group-to-assign/group-to-assign.component';
import { InstructorToAssignComponent } from './components/instructor-to-assign/instructor-to-assign.component';
import { ActivityToAssignComponent } from './components/activity-to-assign/activity-to-assign.component';

@NgModule({
  declarations: [
    GroupComponent,
    GroupDetailComponent,
    InstructorComponent,
    InstructorDetailComponent,
    ActivitiesComponent,
    ActivitiesDetailComponent,
    AssignmentComponent,
    AssignmentDetailComponent,
    DateTimeToAssignComponent,
    GroupToAssignComponent,
    InstructorToAssignComponent,
    ActivityToAssignComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    RouterTestingModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      }),
  ],
  exports:[
    GroupComponent,
    GroupDetailComponent,
    InstructorComponent,
    InstructorDetailComponent,
    ActivitiesComponent,
    ActivitiesDetailComponent,
    AssignmentComponent,
    AssignmentDetailComponent,
    DateTimeToAssignComponent,
    GroupToAssignComponent,
    InstructorToAssignComponent,
    ActivityToAssignComponent
  ],
  providers:[
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { 

  constructor(){}
  }

