import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {PluginsModule} from "../../plugins/plugins.module";
import {AddInitiativeComponent} from "./addInitiative.component";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

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
		AddInitiativeComponent
	],
	exports: [
		AddInitiativeComponent
	]
})
export class AddInitiativeModule { }