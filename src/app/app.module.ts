import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposeComponent } from './compose/compose.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentitemsComponent } from './sentitems/sentitems.component';
import { StarredComponent } from './starred/starred.component';
@NgModule({
  declarations: [
    AppComponent,
    SentitemsComponent,
    InboxComponent,
    ComposeComponent,
    StarredComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
