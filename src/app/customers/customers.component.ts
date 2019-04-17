import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  details;
  constructor(private cs:CustomerserviceService) { }

  ngOnInit() { this.cs.display().subscribe(data=>this.details=data);
  }
  

}
