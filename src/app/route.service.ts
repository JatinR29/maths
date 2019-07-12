import { Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { ComparisonComponent } from './comparison/comparison.component';
import { ContentComponent } from './content/content.component';
import { AscdscComponent } from './ascdsc/ascdsc.component';

const appRoutes: Routes = [
  {path: 'content/comparison', component: ComparisonComponent},
  {path: 'content', component: ContentComponent},
  {path: 'content/ascdsc', component: AscdscComponent }
];

@Injectable({
  providedIn: 'root'
})


@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes)
  ],

  exports: [
    RouterModule,
    FormsModule
  ]
})
export class RouteService {

  constructor() { }
}
