import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FloorPageComponent } from './pages/floor/floor-page.component';
import { TeamSettingsComponent } from './pages/team/team-settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'floor/:floorId', component: FloorPageComponent },
  { path: 'team', component: TeamSettingsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
