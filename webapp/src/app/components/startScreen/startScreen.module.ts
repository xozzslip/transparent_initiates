import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {PluginsModule} from "../../plugins/plugins.module";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {StartScreenComponent} from "./startScreen.component";

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		RouterModule,
		PluginsModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		StartScreenComponent
	],
	exports: [
		StartScreenComponent
	]
})
export class StartScreenModule { }