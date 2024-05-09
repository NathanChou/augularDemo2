import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberCenterRoutingModule } from './member-center-routing.module';
import { MemberCenterComponent } from './member-center.component';
import { OrdersComponent } from './orders/orders.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';


@NgModule({
  declarations: [
    MemberCenterComponent,
    OrdersComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    MemberCenterRoutingModule
  ]
})
export class MemberCenterModule { }
