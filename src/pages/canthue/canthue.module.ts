import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CanthuePage } from './canthue';

@NgModule({
  declarations: [
    CanthuePage,
  ],
  imports: [
    IonicPageModule.forChild(CanthuePage),
  ],
})
export class CanthuePageModule {}
