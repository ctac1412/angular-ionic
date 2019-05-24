import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { ServerInputComponent } from './servers/server-input.component';

const routes: Routes = [
  { path: '', component: ServersComponent },
  { path: 'input', component: ServerInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
