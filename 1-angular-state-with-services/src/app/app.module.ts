import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { TodosStoreService } from './services/todos-store.service';
import {CounterStore} from './services/counter.store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [TodosStoreService, CounterStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
