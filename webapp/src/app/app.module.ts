import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MainPageModule} from "./components/mainPage/mainPage.module";
import {AppRoutingModule} from "./routing";
import {ProjectDetailsModule} from "./components/projectDetails/projectDetails.module";
import {PluginsModule} from "./plugins/plugins.module";
import {DefaultService} from "./services/default.service";
import {AddInitiativeModule} from "./components/addInitiative/addInitiative.module";
import {StartScreenModule} from "./components/startScreen/startScreen.module";
@NgModule({
	imports: [
		BrowserModule,
		MainPageModule,
		AppRoutingModule,
		ProjectDetailsModule,
		PluginsModule,
		AddInitiativeModule,
		StartScreenModule
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