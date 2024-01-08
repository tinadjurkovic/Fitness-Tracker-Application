import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { GainWeightComponent } from './menu/gain-weight/gain-weight.component';
import { LoseWeightComponent } from './menu/lose-weight/lose-weight.component';
import { StrengthenMusclesComponent } from './menu/strengthen-muscles/strengthen-muscles.component';
import { StayActiveComponent } from './menu/stay-active/stay-active.component';
import { TrackerComponent } from './tracker/tracker.component';
import { AuthGuard } from './auth.guard';
import { EmptyGuard } from './empty.guard';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full', canActivate: [EmptyGuard] },
  { path: 'user', component: UserComponent },
  {
    path: 'menu',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: MenuComponent, canActivate: [EmptyGuard] },
      { path: 'gain-weight', component: GainWeightComponent },
      { path: 'lose-weight', component: LoseWeightComponent },
      { path: 'strengthen-muscles', component: StrengthenMusclesComponent },
      { path: 'stay-active', component: StayActiveComponent },
    ],
  },
  { path: 'tracker', canActivate: [AuthGuard], component: TrackerComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
