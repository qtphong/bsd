import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChothuePage } from './chothue';

@NgModule({
  declarations: [
    ChothuePage,
  ],
  imports: [
    IonicPageModule.forChild(ChothuePage),
  ],
})
export class ChothuePageModule {}
