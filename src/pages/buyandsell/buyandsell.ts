import { Component } from '@angular/core';
import {  ModalOptions, ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {SellPage} from '../sell/sell';
import {BuyPage} from '../buy/buy';
/**
 * Generated class for the BuyandsellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyandsell',
  templateUrl: 'buyandsell.html',
})
export class BuyandsellPage {
  sell = SellPage;
  buy = BuyPage;
  title:any;
  constructor(private modal:ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  tabBuySelect(){
    this.title="Cần mua"
  }

  tabSellSelect(){
    this.title = "Cần bán"
  }

  openModal(){
    var filterOptions : ModalOptions = {
     
      enableBackdropDismiss: false
    }
    var myFilter = this.modal.create('ModalfilterPage',{},filterOptions)

    myFilter.present();
  }

}
