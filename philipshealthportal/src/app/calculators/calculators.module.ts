import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorsRoutingModule } from './calculators-routing.module';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { CalculatorDashboardComponent } from './calculator-dashboard/calculator-dashboard.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    BmiCalculatorComponent,
    CalculatorDashboardComponent
  ],
  imports: [
    CommonModule,
    CalculatorsRoutingModule,
    MaterialModule
  ]
})
export class CalculatorsModule { }
