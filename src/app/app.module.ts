import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBootstrapModule } from './modules/app-bootstrap/app-bootstrap.module';
import { StarwarsComponent } from './components/starwars/starwars.component';
import { StarwarsService } from './services/starwars.service';

@NgModule({
  declarations: [
    AppComponent,
    StarwarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppBootstrapModule
  ],
  providers: [StarwarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
