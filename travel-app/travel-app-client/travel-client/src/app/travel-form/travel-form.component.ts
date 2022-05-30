import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TravelService } from '../service/travel-service.service';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.scss']
})
export class TravelFormComponent implements OnInit {
  myForm!: FormGroup;
  successMessage = false;
  constructor(private fb: FormBuilder, private travelService: TravelService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email_address: ['', Validators.required],
      travel_location: ['India', Validators.required],
      number_of_travellers: ['', Validators.required],
      budget_per_person: ['', Validators.required]
    });

  }

  submitData() {
    debugger
    if (this.myForm.valid) {
      this.travelService.postTravelData(this.myForm.value).subscribe((resp) => {
        if (resp) {
          this.myForm.reset();
          this.myForm.get('travel_location')?.setValue('India');
          this.successMessage = true;
          setTimeout(() => {
            this.successMessage = false;
          }, 6000);
        }
      })
    }
  }

}
