import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { GroupService } from 'src/app/core/services/group.service';
import { ChildrenGroup } from 'src/app/core/models/children-group.model';
import { GroupDetailComponent } from 'src/app/core/components/group-detail/group-detail.component';

@Component({
  selector: 'app-show-group',
  templateUrl: './show-group.component.html',
  styleUrls: ['./show-group.component.scss'],
})
export class ShowGroupComponent implements OnInit {

  constructor(
    private groupSvc:GroupService,
    private modal:ModalController,
    private alert:AlertController
  ) { }

  ngOnInit() {}

  getGroup(){
    return this.groupSvc._group$;
  }
  async presentGroupForm(group:ChildrenGroup){
    const modal = await this.modal.create({
      component:GroupDetailComponent,
      componentProps:{
        group:group
      },
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.groupSvc.addGroup(result.data.group);
            break;
          case 'Edit':
            this.groupSvc.updateGroup(result.data.group);
            break;
          default:
        }
      }
    });
  }

  onNewGroup(){
    this.presentGroupForm(null);  
  }

  onEditGroup(group){
    this.presentGroupForm(group);
  }

  async onDeleteAlert(group){
    const alert = await this.alert.create({
      header:'Atención',
      message: '¿De verdad quieres eliminar este grupo?',
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
            this.groupSvc.deleteGroupById(group.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    
    }
    onDeleteGroup(group){
      this.onDeleteAlert(group);
  }
}

