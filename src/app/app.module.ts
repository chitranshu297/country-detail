import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from './component/box/box.component';
import { SharedDataComponent } from './shared/shared-data/shared-data.component';
import { DetailsComponent } from './component/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BoxComponent,
    SharedDataComponent,
    DetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
