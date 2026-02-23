import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ChaiList } from './components/chai-list/chai-list';
import { ChaiCard } from './components/chai-card/chai-card';
import { Order } from './components/order/order';
import { Footer } from './components/footer/footer';
import { Contact } from './components/contact/contact';

@NgModule({
  declarations: [
    App,
    ChaiList,
    ChaiCard,
    Order,
    Footer,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
