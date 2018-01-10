import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChothuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chothue',
  templateUrl: 'chothue.html',
})
export class ChothuePage {

  constructor(private alert:AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }


}
