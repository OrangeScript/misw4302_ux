import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  {path: 'sign-in',
   component: SignInComponent,
   pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {path: 'sign-up',
    component: SignUpComponent,
    pathMatch: 'full'
  },
  {path: 'home',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full'
  },
  {path: 'devices',
    component: DevicesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
