import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MemberCenterComponent } from './member-center.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', component: MemberCenterComponent },
  { path: 'orders', component: OrdersComponent  },
  { path: 'maintenance', component: MaintenanceComponent , outlet:'child'  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberCenterRoutingModule { }
