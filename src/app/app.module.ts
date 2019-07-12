import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { ContentComponent } from './content/content.component';
import { RouteService } from './route.service';
import { AscdscComponent } from './ascdsc/ascdsc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComparisonComponent,
    ContentComponent,
    AscdscComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouteService,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
