import { Component } from '@angular/core';
import { ModalOptions, ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CanthuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canthue',
  templateUrl: 'canthue.html',
})
export class CanthuePage {

  constructor(public modal:ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  
  openModal(){
    var filterOptions : ModalOptions = {
     
      enableBackdropDismiss: false
    }
    var myFilter = this.modal.create('ModalfilterPage',{},filterOptions)

    myFilter.present();
  }
}
