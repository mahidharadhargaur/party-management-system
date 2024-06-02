import { Component, OnInit, inject } from '@angular/core';
import { PartyManagementSystemService } from '../services/party-management-system.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-party',
  templateUrl: './view-party.component.html',
  styleUrl: './view-party.component.scss',
})
export class ViewPartyComponent implements OnInit {
  private partyService = inject(PartyManagementSystemService);
  private route = inject(ActivatedRoute);

  public partyDetails: any;

  defaultImageUrl =
    'https://images.pexels.com/photos/1751279/pexels-photo-1751279.jpeg?auto=compress&cs=tinysrgb&w=600';


  public partyFields = [
    {
      name: 'Name',
      key: 'name',
    },
    {
      name: 'Mobile Number',
      key: 'mobile_no',
    },
    {
      name: 'Company Name',
      key: 'company_name',
    },
    {
      name: 'Mobile Number',
      key: 'mobile_no',
    },
    {
      name: 'Telephone Number',
      key: 'telephone_no',
    },
    {
      name: 'Whatsapp Number',
      key: 'whatsapp_no',
    },
    {
      name: 'Email',
      key: 'email',
    },
    {
      name: 'Remark',
      key: 'remark',
    },
    {
      name: 'Date of Birth',
      key: 'date_of_birth',
    },
    {
      name: 'Anniversary Date',
      key: 'anniversary_date',
    },
    {
      name: 'GSTIN',
      key: 'gstin',
    },
    {
      name: 'Pan Number',
      key: 'pan_no',
    },
    {
      name: 'Credit Limit',
      key: 'credit_limit',
    },
  ];

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.partyService.getPartyDetails(id).subscribe({
      next: (res) => {
        this.partyDetails = res;
      },
    });
  }
}
