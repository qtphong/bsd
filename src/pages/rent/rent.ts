import { Component } from '@angular/core';
import { ModalOptions, ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {CanthuePage } from '../canthue/canthue';
import {ChothuePage } from '../chothue/chothue';
/**
 * Generated class for the RentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rent',
  templateUrl: 'rent.html',
})
export class RentPage {
  canthue = CanthuePage;
  chothue = ChothuePage;
  title:any;
  constructor(private modal:ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }
  tabChange(){
    
    // this.title = "Home"
  }
  
  tabCanThueSelect(){
    this.title = "Cần Thuê"
  }

  tabChoThueSelect(){
    this.title = "Cho Thuê"
  }
  openModal(){
    var filterOptions : ModalOptions = {
     
      enableBackdropDismiss: false
    }
    var myFilter = this.modal.create('ModalfilterPage',{},filterOptions)

    myFilter.present();
  }

}
