/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgifComponent } from './ngif.component';

describe('NgifComponent', () => {
  let component: NgifComponent;
  let fixture: ComponentFixture<NgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
