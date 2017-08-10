import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbAlert,NgbProgressbar,NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import { NgForm,FormsModule } from '@angular/forms';
import {HttpModule,Headers } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
HttpModule

  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
