import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalfilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalfilter',
  templateUrl: 'modalfilter.html',
})
export class ModalfilterPage {
  dualValue2: any = {
    upper: 1000,
    lower: 50
  }


  constructor(private view: ViewController, private navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalfilterPage');
  }

  closeModal() {
    this.view.dismiss();
  }
}
