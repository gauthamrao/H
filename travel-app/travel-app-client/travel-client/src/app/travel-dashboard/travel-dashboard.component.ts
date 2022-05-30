import { Component, OnInit } from '@angular/core';
import { TravelService } from '../service/travel-service.service';

@Component({
  selector: 'app-travel-dashboard',
  templateUrl: './travel-dashboard.component.html',
  styleUrls: ['./travel-dashboard.component.scss']
})
export class TravelDashboardComponent implements OnInit {
  public travelerInformation: any;
  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.travelService.getTravelData().subscribe((travelData)=>{
      this.travelerInformation = travelData;
    })
  }
}
