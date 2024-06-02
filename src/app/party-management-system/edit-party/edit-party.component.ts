import { Component, inject } from '@angular/core';
import { PartyManagementSystemService } from '../services/party-management-system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-party',
  templateUrl: './edit-party.component.html',
  styleUrl: './edit-party.component.scss',
})
export class EditPartyComponent {
  private partyService = inject(PartyManagementSystemService);
  private route = inject(ActivatedRoute);
  private _fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  public partyDetails: any;

  public partyForm!: FormGroup;

  defaultImageUrl =
    'https://images.pexels.com/photos/1751279/pexels-photo-1751279.jpeg?auto=compress&cs=tinysrgb&w=600';

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.partyService.getPartyDetails(id).subscribe({
      next: (res) => {
        this.partyDetails = res;
        this.initForm();
      },
    });
  }

  private initForm() {
    this.partyForm = this._fb.group({
      name: new FormControl(this.partyDetails.name),
      mobile_no: new FormControl(this.partyDetails.mobile_no),
      company_name: new FormControl(this.partyDetails.company_name),
      telephone_no: new FormControl(this.partyDetails.telephone_no),
      whatsapp_no: new FormControl(this.partyDetails.whatsapp_no),
      email: new FormControl(this.partyDetails.email),
      remark: new FormControl(this.partyDetails.remark),
      date_of_birth: new FormControl(this.partyDetails.date_of_birth),
      anniversary_date: new FormControl(this.partyDetails.anniversary_date),
      gstin: new FormControl(this.partyDetails.gstin),
      pan_no: new FormControl(this.partyDetails.pan_no),
      credit_limit: new FormControl(this.partyDetails.credit_limit),
    });
  }

  save() {
    console.log(this.partyForm.value);
    this.partyService
      .editPartyDetils(this.partyDetails.id, {
        ...this.partyForm.value,
        bank: [],
        address: [],
        login_access: false,
        apply_tds: false,
      })
      .subscribe({
        next: (res) => {
          if (!res.success) {
            this.snackBar.open(res.error, '', {
              duration: 2000,
            });
            return;
          }
          this.router.navigate(['']);
        },
      });
  }
}
