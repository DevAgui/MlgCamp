import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { CoreModule } from "../core/core.module";
import { ShowGroupComponent } from "./components/show-group/show-group.component";
import { ShowInstructorsComponent } from './components/show-instructors/show-instructors.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../core/utils/translate';
import { ShowActivitiesComponent } from './components/show-activities/show-activities.component';
import { AssignmentComponent } from '../core/components/assignment/assignment.component';
import { ShowAssignmentsComponent } from './components/show-assignments/show-assignments.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        FolderPage,
        ShowGroupComponent,
        ShowInstructorsComponent,
        AboutComponent,
        ShowActivitiesComponent,
        ShowAssignmentsComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FolderPageRoutingModule,
        CoreModule,
        TranslateModule.forChild({
            loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
            }
            }),
    ],
    
})
export class FolderPageModule {}
