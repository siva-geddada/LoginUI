import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserIdleModule } from 'angular-user-idle';
import { CountdownModule } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    UserIdleModule.forRoot({idle: 10, timeout: 20, ping: 20})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
