import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdPageRoutingModule } from './cd-routing.module';

import { CdPage } from './cd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CdPageRoutingModule
  ],
  declarations: [CdPage]
})
export class CdPageModule {}
