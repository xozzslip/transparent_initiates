import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ProjectDetailsComponent} from "./projectDetails.component";
import {RouterModule} from "@angular/router";
@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		RouterModule
	],
	declarations: [
		ProjectDetailsComponent
	],
	exports: [
		ProjectDetailsComponent
	]
})
export class ProjectDetailsModule { }