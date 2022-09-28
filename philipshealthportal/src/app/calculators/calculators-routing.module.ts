import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { CalculatorDashboardComponent } from './calculator-dashboard/calculator-dashboard.component';

const routes: Routes = [
  { path:"", component:CalculatorDashboardComponent, children:[
    { path:"bmi-calculator", component:BmiCalculatorComponent },
    { path:"meld-calculator", component:BmiCalculatorComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorsRoutingModule { }
