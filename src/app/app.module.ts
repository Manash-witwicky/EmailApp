import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatExpansionModule, MatSidenavModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentitemsComponent } from './sentitems/sentitems.component';
@NgModule({
  declarations: [
    AppComponent,
    SentitemsComponent,
    InboxComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatSidenavModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
