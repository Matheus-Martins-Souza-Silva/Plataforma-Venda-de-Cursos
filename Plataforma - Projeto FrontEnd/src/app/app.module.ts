import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TestBootstrapComponent } from './TesteBootStrap/test-bootstrap/test-bootstrap.component';

export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true,  max: 150 });
}

@NgModule({
  declarations: [
    AppComponent,
    TestBootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
