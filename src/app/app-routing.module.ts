import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxComponent } from './component/box/box.component';
import { DetailsComponent } from './component/details/details.component';
import { HomepageComponent } from './component/homepage/homepage.component';
const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'country-detail/:id', component: DetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
