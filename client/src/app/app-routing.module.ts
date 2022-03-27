import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LeadsComponent } from './pages/leads/leads.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "leads",
  component: LeadsComponent
},
{
  path: "",
  redirectTo: "/",
  pathMatch: "full"
},
  // full = exact { path: "**", component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
