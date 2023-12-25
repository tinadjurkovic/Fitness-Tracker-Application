import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component'; 
import { MenuComponent } from './menu/menu.component';
import { GainWeightComponent } from './gain-weight/gain-weight.component';
import { AppRoutingModule } from './app-routing.module';
import { LoseWeightComponent } from './lose-weight/lose-weight.component';
import { StrengthenMusclesComponent } from './strengthen-muscles/strengthen-muscles.component';
import { StayActiveComponent } from './stay-active/stay-active.component';
import { TrackerComponent } from './tracker/tracker.component';
import { TrackerService } from './tracker/tracker.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MenuComponent,
    GainWeightComponent,
    LoseWeightComponent,
    StrengthenMusclesComponent,
    StayActiveComponent,
    TrackerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule, 
  ],
  providers: [TrackerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
