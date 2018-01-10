import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BuyandsellinfoPage} from '../../pages/buyandsellinfo/buyandsellinfo';
import {BuyandsellcontactPage} from '../../pages/buyandsellcontact/buyandsellcontact';
/**
 * Generated class for the BuyandselldetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyandselldetail',
  templateUrl: 'buyandselldetail.html',
})
export class BuyandselldetailPage {
  buyandsellInfo = BuyandsellinfoPage;
  buyandsellContact = BuyandsellcontactPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidLoad() {

  }

}
