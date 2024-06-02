import { Component, OnInit, inject } from '@angular/core';
import { PartyManagementSystemService } from '../services/party-management-system.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrl: './party-list.component.scss',
})
export class PartyListComponent implements OnInit {
  private router = inject(Router);
  public displayedColumns = [
    'name',
    'company_name',
    'username',
    'anniversary_date',
    'actions',
  ];

  public partiesList$: Observable<any> = of([]);

  constructor(private partyManagementService: PartyManagementSystemService) {}

  ngOnInit(): void {
    this.partiesList$ = this.partyManagementService.getAllParties();
  }

  view(id: number) {
    this.router.navigate([`/view/${id}`]);
  }

  edit(id: number) {
    this.router.navigate([`/edit/${id}`]);
  }

  delete(id: number) {
    //delete api
    this.partyManagementService.deleteParty(id).subscribe({
      next: (res) => {
        this.partiesList$ = this.partyManagementService.getAllParties();
      },
    });
  }

  addNew() {
    this.router.navigate(['/add']);
  }
}
