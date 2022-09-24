import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdPage } from './cd.page';

const routes: Routes = [
  {
    path: '',
    component: CdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdPageRoutingModule {}
