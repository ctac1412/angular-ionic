import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkbookPage } from './workbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: WorkbookPage
      }
    ])
  ],
  declarations: [WorkbookPage]
})
export class WorkbookPageModule {}
