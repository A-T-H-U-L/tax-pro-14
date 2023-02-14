import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AuthenticationGuard } from './auth';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ViewComponent } from './view/view.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'adminHome', component: AdminHomeComponent, data: { title: marker('AdminHome') }},
  { path: 'addDetail', component: AddComponent, data: { title: marker('Add') }}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
