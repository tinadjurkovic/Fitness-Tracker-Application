import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component'; 
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { TrackerComponent } from './tracker/tracker.component';
import { TrackerService } from './services/tracker.service';
import { GainWeightComponent } from './menu/gain-weight/gain-weight.component';
import { LoseWeightComponent } from './menu/lose-weight/lose-weight.component';
import { StrengthenMusclesComponent } from './menu/strengthen-muscles/strengthen-muscles.component';
import { StayActiveComponent } from './menu/stay-active/stay-active.component';
import { UserService } from './services/user.service';
import { ModalComponent } from './modal/modal.component';


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
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule, 
  ],
  providers: [TrackerService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
