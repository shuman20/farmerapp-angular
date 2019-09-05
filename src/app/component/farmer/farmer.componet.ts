import {Component, OnInit} from '@angular/core';
import {FarmerService} from '../../service/farmer/farmer.service';
import {Farmer} from '../../model/farmer.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'farmer',
  templateUrl: './farmer.component.html',
  providers: [FarmerService]
})
export class FarmerComponent implements OnInit {
  farmersList: Farmer[];
   farmer: Farmer;

  constructor(private farmerService: FarmerService) {

  }

  ngOnInit(): void {
    this.farmer = new Farmer();
    console.log('constructor call');
    this.farmerService.getAllActiveFarmers().subscribe((farmers: Farmer[]) => {
      this.farmersList = farmers;
    });
  }

  create() {
    this.farmerService.create(this.farmer).subscribe(data => {
    });
  }
}


