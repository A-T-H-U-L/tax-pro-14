import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';
import { AddRoutingModule } from '@app/add/add-routing.module';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule, SharedModule,AddRoutingModule],
  declarations: [AdminHomeComponent],
})
export class adminModule {




  
}
