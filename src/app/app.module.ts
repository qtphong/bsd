import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { BuyandsellPage } from '../pages/buyandsell/buyandsell';
import { SellPage } from '../pages/sell/sell';
import { BuyPage } from '../pages/buy/buy';
import { NewsPage } from '../pages/news/news';
import { RentPage } from '../pages/rent/rent';
import {CanthuePage } from '../pages/canthue/canthue';
import {ChothuePage } from '../pages/chothue/chothue';
import {NewdetailPage } from '../pages/newdetail/newdetail';
import { BuyandselldetailPage } from '../pages/buyandselldetail/buyandselldetail';
import { BuyandsellinfoPage } from '../pages/buyandsellinfo/buyandsellinfo';
import { BuyandsellcontactPage } from '../pages/buyandsellcontact/buyandsellcontact';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    BuyandsellPage,
    SellPage,
    BuyPage,
    NewsPage,
    RentPage,
    CanthuePage,
    ChothuePage,
    NewdetailPage,
    BuyandselldetailPage,
    BuyandsellinfoPage,
    BuyandsellcontactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    BuyandsellPage,
    SellPage,
    BuyPage,
    NewsPage,
    RentPage,
    CanthuePage,
    ChothuePage,
    NewdetailPage,
    BuyandselldetailPage,
    BuyandsellinfoPage,
    BuyandsellcontactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
