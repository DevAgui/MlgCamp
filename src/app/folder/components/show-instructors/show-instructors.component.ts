import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { InstructorDetailComponent } from 'src/app/core/components/instructor-detail/instructor-detail.component';
import { instructor } from 'src/app/core/models/instructor.model';
import { InstructorService } from 'src/app/core/services/instructor.service';


@Component({
  selector: 'app-show-instructors',
  templateUrl: './show-instructors.component.html',
  styleUrls: ['./show-instructors.component.scss'],
})
export class ShowInstructorsComponent implements OnInit {

  constructor(
    private instructorSvc:InstructorService,
    private modal:ModalController,
    private alert:AlertController
  ) { }

  ngOnInit() {}

  getInstructor(){
    return this.instructorSvc._instructor$;
  }
  async presentGroupForm(instructor:instructor){
    const modal = await this.modal.create({
      component:InstructorDetailComponent,
      componentProps:{
        instructor:instructor
      },
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.instructorSvc.addInstructor(result.data.instructor);
            break;
          case 'Edit':
            this.instructorSvc.updateInstructor(result.data.instructor);
            break;
          default:
        }
      }
    });
  }

  onNewInstructor(){
    this.presentGroupForm(null);  
  }

  onEditInstructor(instructor){
    this.presentGroupForm(instructor);
  }

  async onDeleteAlert(instructor){
    const alert = await this.alert.create({
      header:'Atención',
      message: '¿De verdad quieres eliminar este monitor?',
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
            this.instructorSvc.deleteInstructorById(instructor.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    
    }
    onDeleteInstructor(instructor){
      this.onDeleteAlert(instructor);
  }
}

