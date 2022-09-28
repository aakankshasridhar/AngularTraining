import {​​​​​​ NgModule }​​​​​​ from '@angular/core';
import {​​​​​​ RouterModule, Routes }​​​​​​ from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { CalculatorDashboardComponent } from './calculators/calculator-dashboard/calculator-dashboard.component';
import { CardsDashboardComponent } from './components/cards-dashboard/cards-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticateRouteGuard } from './routeGuards/authenticateRouteGuard';

const routes: Routes = [
    { path:'', redirectTo:"home", pathMatch:'full' },
    { path:"home", component:HomeComponent, children: [
        { path:"login", component:LoginComponent },
        { path:"signup", component:SignupComponent }
    ]},
    { path:"cards-dashboard/:username", component:CardsDashboardComponent, children: [
        { path:"calculators", loadChildren:()=>import('./calculators/calculators.module').then(m=>m.CalculatorsModule) },
    ], canActivate: [AuthenticateRouteGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})

export class AppRoutingModule{

}
