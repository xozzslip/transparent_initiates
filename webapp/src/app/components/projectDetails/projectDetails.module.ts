import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ProjectDetailsComponent} from "./projectDetails.component";
import {RouterModule} from "@angular/router";
import {PluginsModule} from "../../plugins/plugins.module";
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
		ProjectDetailsComponent
	],
	exports: [
		ProjectDetailsComponent
	]
})
export class ProjectDetailsModule { }