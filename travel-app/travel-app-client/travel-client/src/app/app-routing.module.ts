import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelDashboardComponent } from './travel-dashboard/travel-dashboard.component';
import { TravelFormComponent } from './travel-form/travel-form.component';

const routes: Routes = [
  {
  path: 'travel-form',
  component: TravelFormComponent
},
{
  path: 'travel-dashboard',
  component: TravelDashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
