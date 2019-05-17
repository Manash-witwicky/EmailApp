import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { SentitemsComponent } from './sentitems/sentitems.component';



const routes: Routes = [
  { path: 'inbox', component: InboxComponent },
  { path: 'sentitems', component: SentitemsComponent },
  { path: '', redirectTo: '/inbox', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
