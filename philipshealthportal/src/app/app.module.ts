import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from './accounts/accounts.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material.module';
import { CardsDashboardComponent } from './components/cards-dashboard/cards-dashboard.component';
import { AccountService } from './services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { TextColorDirective } from './directives/textColor.directive';
import { AuthenticateRouteGuard } from './routeGuards/authenticateRouteGuard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsDashboardComponent,
    TextColorDirective
  ],
  imports: [
    BrowserModule, 
    AccountsModule, 
    BrowserAnimationsModule, 
    AppRoutingModule, 
    MaterialModule,
    HttpClientModule
  ],
  providers: [AccountService, AuthenticateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
