import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RentPage} from '../rent/rent';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { BuyandsellPage } from '../buyandsell/buyandsell';
import { NewsPage } from '../news/news';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  gotoBuyAndSell(){
    this.navCtrl.push(BuyandsellPage)
  }

  gotoNews(){
    this.navCtrl.push(NewsPage)
  }

  gotoRegister(){
    this.navCtrl.push(RegisterPage)
  }

  gotoRent(){
    this.navCtrl.push(RentPage)
  }

  gotoLogin(){
    this.navCtrl.push(LoginPage)
  }
}
