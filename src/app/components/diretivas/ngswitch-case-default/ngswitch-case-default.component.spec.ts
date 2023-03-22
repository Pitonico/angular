import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchCaseDefaultComponent } from './ngswitch-case-default.component';

describe('NgswitchCaseDefaultComponent', () => {
  let component: NgswitchCaseDefaultComponent;
  let fixture: ComponentFixture<NgswitchCaseDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchCaseDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgswitchCaseDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
