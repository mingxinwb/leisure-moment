import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ConversationPanelComponent } from './components/conversation-panel/conversation-panel.component';
import { DataService } from './services/data.service';
import { MomentDetailComponent } from './components/moment-detail/moment-detail.component';
import { MomentListComponent } from './components/moment-list/moment-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewMomentComponent } from './components/new-moment/new-moment.component';
import { NicknameWrapperComponent } from './components/nickname-wrapper/nickname-wrapper.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MomentListComponent,
    MomentDetailComponent,
    NewMomentComponent,
    NavbarComponent,
    ConversationPanelComponent,
    NicknameWrapperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
