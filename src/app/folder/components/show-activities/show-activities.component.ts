import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ActivitiesDetailComponent } from 'src/app/core/components/activities-detail/activities-detail.component';
import { ActivitiesComponent } from 'src/app/core/components/activities/activities.component';
import { Activities } from 'src/app/core/models/activities.model';
import { ActivitiesService } from 'src/app/core/services/activity.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-show-activities',
  templateUrl: './show-activities.component.html',
  styleUrls: ['./show-activities.component.scss'],
})
export class ShowActivitiesComponent implements OnInit {

  activities:any[];
  searchedActivities:any;

  constructor(
    private activitiesSvc:ActivitiesService,

    private modal:ModalController,
    private alert:AlertController
  ) { }


  ngOnInit() {}

  getActivity(){
    return this.activitiesSvc._activities$;
  }
  async presentGroupForm(activities:Activities){
    const modal = await this.modal.create({
      component:ActivitiesDetailComponent,
      componentProps:{
        activities:activities
      },
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.activitiesSvc.addActivity(result.data.activities);
            break;
          case 'Edit':
            this.activitiesSvc.updateActivity(result.data.activities);
            break;
          default:
        }
      }
    });
  }

  onNewActivity(){
    this.presentGroupForm(null);  
  }

  onEditActivity(activities){
    this.presentGroupForm(activities);
  }

  async onDeleteAlert(activities){
    const alert = await this.alert.create({
      header:'Atención',
      message: '¿De verdad quieres eliminar esta actividad?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Cancelado");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.activitiesSvc.deleteActivityById(activities.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    
    }
    onDeleteActivity(activities){
      this.onDeleteAlert(activities);
    } 
  }

