import { Component, OnInit, inject } from '@angular/core';
import { PartyManagementSystemService } from '../services/party-management-system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-new-party',
  templateUrl: './add-new-party.component.html',
  styleUrl: './add-new-party.component.scss',
})
export class AddNewPartyComponent implements OnInit {
  private partyService = inject(PartyManagementSystemService);
  private route = inject(ActivatedRoute);
  private _fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  public partyForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.partyForm = this._fb.group({
      name: new FormControl(),
      mobile_no: new FormControl(),
      company_name: new FormControl(),
      telephone_no: new FormControl(),
      whatsapp_no: new FormControl(),
      email: new FormControl(),
      remark: new FormControl(),
      date_of_birth: new FormControl(),
      anniversary_date: new FormControl(),
      gstin: new FormControl(),
      pan_no: new FormControl(),
      credit_limit: new FormControl(),
    });
  }

  public save() {
    this.partyService
      .addNew({
        ...this.partyForm.value,
        bank: [],
        address: [],
        login_access: false,
        apply_tds: false,
      })
      .subscribe({
        next: (res) => {
          this.router.navigate(['']);
        },
        error: (err) => {
          const er = err.error.error;
          if (er) {
            Object.keys(er).forEach((x) => {
              this.snackBar.open(`${x}: ${er[x][0]}`, '', {
                duration: 2000,
              });
            });
          } else {
            this.snackBar.open(`${err.error.msg}`, '', {
              duration: 2000,
            });
          }
        },
      });
  }
}
