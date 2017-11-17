import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { MomentListComponent } from './components/moment-list/moment-list.component';
import { MomentDetailComponent } from './components/moment-detail/moment-detail.component';
import { routing } from './app.routes';
import { NewMomentComponent } from './components/new-moment/new-moment.component';

@NgModule({
  declarations: [
    AppComponent,
    MomentListComponent,
    MomentDetailComponent,
    NewMomentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
