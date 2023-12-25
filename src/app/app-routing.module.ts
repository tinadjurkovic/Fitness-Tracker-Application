import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { GainWeightComponent } from './gain-weight/gain-weight.component';
import { LoseWeightComponent } from './lose-weight/lose-weight.component';
import { StrengthenMusclesComponent } from './strengthen-muscles/strengthen-muscles.component';
import {StayActiveComponent} from './stay-active/stay-active.component';
import { TrackerComponent } from './tracker/tracker.component';

const routes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full' },
  {path: 'user', component: UserComponent },
  {path: 'menu', component: MenuComponent},
  {path: 'gain-weight', component: GainWeightComponent},
  {path: 'lose-weight', component: LoseWeightComponent},
  {path: 'strengthen-muscles', component: StrengthenMusclesComponent},
  {path: 'stay-active', component: StayActiveComponent},
  {path: 'tracker', component: TrackerComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
