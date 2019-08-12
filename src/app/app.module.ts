import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, StoreModule.forRoot({}), HeaderModule, PagesModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
