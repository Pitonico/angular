import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingInterpolationComponent } from './property-binding-interpolation.component';

describe('PropertyBindingInterpolationComponent', () => {
  let component: PropertyBindingInterpolationComponent;
  let fixture: ComponentFixture<PropertyBindingInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBindingInterpolationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBindingInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
