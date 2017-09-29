import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationDetailsComponent } from './invitation-details.component';

describe('InvitationDetailsComponent', () => {
  let component: InvitationDetailsComponent;
  let fixture: ComponentFixture<InvitationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
