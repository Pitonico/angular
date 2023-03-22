import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizadasComponent } from './customizadas.component';

describe('CustomizadasComponent', () => {
  let component: CustomizadasComponent;
  let fixture: ComponentFixture<CustomizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
