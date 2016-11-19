import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MainPageModule} from "./components/mainPage/mainPage.module";
import {AppRoutingModule} from "./routing";
import {ProjectDetailsModule} from "./components/projectDetails/projectDetails.module";
import {PluginsModule} from "./plugins/plugins.module";
import {DefaultService} from "./services/default.service";
@NgModule({
	imports: [
		BrowserModule,
		MainPageModule,
		AppRoutingModule,
		ProjectDetailsModule,
		PluginsModule
	],
	providers: [
		DefaultService
	],
	declarations: [
		AppComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }