import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {CardComponent} from "./card.component";
import {RouterModule} from "@angular/router";
import {CityTitleComponent} from "./city-title.component";

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		CardComponent,
		CityTitleComponent
	],
	providers: [
	],
	exports: [
		CardComponent,
		CityTitleComponent
	]
})
export class PluginsModule { }