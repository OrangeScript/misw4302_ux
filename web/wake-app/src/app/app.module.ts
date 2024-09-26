import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { ProfileComponent } from './profile/profile.component';
import { DevicesComponent } from './devices/devices.component';
import { AddServiceDialogComponent } from './profile/add-service-dialog/add-service-dialog.component';
import { DeviceDetailDialogComponent } from './devices/device-detail-dialog/device-detail-dialog.component';


@NgModule({
  declarations: [					
    AppComponent,
    ProfileComponent,
    DevicesComponent,
    AddServiceDialogComponent,
    DeviceDetailDialogComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignInComponent,
    SignUpComponent,
    HomePageComponent,
    AngularMaterialModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
