import { Component, OnDestroy, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cards-dashboard',
  templateUrl: './cards-dashboard.component.html',
  styleUrls: ['./cards-dashboard.component.css']
})
export class CardsDashboardComponent implements OnInit, OnDestroy {

  currentuser?:string|null="";
  subscriptionRef?:Subscription;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriptionRef = this.activatedRoute.paramMap.subscribe((param)=>{
      this.currentuser = param.get("username")
    });
  }

  ngOnDestroy(): void {
    this.subscriptionRef?.unsubscribe();
  }
}
