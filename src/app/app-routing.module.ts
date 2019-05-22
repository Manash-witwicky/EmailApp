import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeComponent } from './compose/compose.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentitemsComponent } from './sentitems/sentitems.component';
import { StarredComponent } from './starred/starred.component';



const routes: Routes = [
  { path: 'compose', component: ComposeComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'sentitems', component: SentitemsComponent },
  { path: 'starred', component: StarredComponent },
  { path: '', redirectTo: '/inbox', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
