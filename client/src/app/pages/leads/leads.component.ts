import { Component, OnInit } from '@angular/core';
import { Lead } from 'src/app/models/Lead';
import { LeadService } from 'src/app/service/lead.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  public leads: Lead[] = []
  constructor(private leadService: LeadService) { }
  ngOnInit() {
    this.leadService.getAllItems().subscribe(
      (leads) => (this.leads = leads,
        console.log(this.leads)),
      (err) => alert(err.message));
  }
}

