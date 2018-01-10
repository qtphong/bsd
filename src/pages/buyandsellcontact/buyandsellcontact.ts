import { Component,ElementRef,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare const google;
/**
 * Generated class for the BuyandsellcontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyandsellcontact',
  templateUrl: 'buyandsellcontact.html',
})

export class BuyandsellcontactPage {
  @ViewChild('map') mapElement: ElementRef;
  map:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let posMaceio = { lat: -9.648139, lng: -35.717239 }
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 8,
        center: posMaceio,
        mapTypeId: 'roadmap'
    });
    this.map.setCenter(posMaceio);
  }

}
