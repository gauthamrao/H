import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelFormComponent } from './travel-form/travel-form.component';
import { TravelDashboardComponent } from './travel-dashboard/travel-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TravelService } from './service/travel-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TravelFormComponent,
    TravelDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TravelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
