import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventBindingComponent } from './components/data-binding/event-binding/event-binding.component';
import { ClassStyleBindingComponent } from './components/data-binding/class-style-binding/class-style-binding.component';
import { PropertyBindingInterpolationComponent } from './components/data-binding/property-binding-interpolation/property-binding-interpolation.component';
import { TwoWayDataBindingComponent } from './components/data-binding/two-way-data-binding/two-way-data-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    ClassStyleBindingComponent,
    PropertyBindingInterpolationComponent,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    BrowserAnimationsModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
