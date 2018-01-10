import { Component } from '@angular/core';
import {App, ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyandselldetailPage } from '../buyandselldetail/buyandselldetail';

/**
 * Generated class for the BuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {

  constructor(private appCtl:App, private viewCtl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  gotoDetail(){
    
    this.navCtrl.push(BuyandselldetailPage);
  }

}
