import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostComponent } from './host/host.component';
import { JoinComponent } from './join/join.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  { path: '', redirectTo: 'join', pathMatch: 'full' },
  { path: 'join', component: JoinComponent },
  { path: 'host', component: HostComponent },
  { path: 'play/:id', component: PlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
