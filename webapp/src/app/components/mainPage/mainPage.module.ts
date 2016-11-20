import { NgModule } from '@angular/core';
import {MainPageComponent} from "./mainPage.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {PluginsModule} from "../../plugins/plugins.module";
@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		RouterModule,
		PluginsModule
	],
	declarations: [
		MainPageComponent
	],
	exports: [
		MainPageComponent
	]
})
export class MainPageModule { }