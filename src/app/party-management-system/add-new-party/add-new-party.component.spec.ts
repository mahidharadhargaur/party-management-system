import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPartyComponent } from './add-new-party.component';

describe('AddNewPartyComponent', () => {
  let component: AddNewPartyComponent;
  let fixture: ComponentFixture<AddNewPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewPartyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
