import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material';
import { ScheduleDailyComponent } from './schedule-daily/schedule-daily.component';

import { HttpClientModule } from '@angular/common/http';

import { AppService } from './app.service';

import { MAT_DATE_LOCALE } from '@angular/material';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleDailyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
