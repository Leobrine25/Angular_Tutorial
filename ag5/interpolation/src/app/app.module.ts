import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestPropBindComponent } from './test-prop-bind/test-prop-bind.component';
import { TestClassBindComponent } from './test-class-bind/test-class-bind.component';
import { TeststylebindComponent } from './teststylebind/teststylebind.component';
import { TesteventbindComponent } from './testeventbind/testeventbind.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestPropBindComponent,
    TestClassBindComponent,
    TeststylebindComponent,
    TesteventbindComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
