import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {CardComponent} from "./card.component";
import {RouterModule} from "@angular/router";
import {CityTitleComponent} from "./city-title.component";
import {CustomHeaderComponent} from "./custom-header.component";
import {CommentComponent} from "./comment.component";
import {VerdictCardComponent} from "./verdict-card.component";

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		CardComponent,
		CityTitleComponent,
		CustomHeaderComponent,
		CommentComponent,
		VerdictCardComponent
	],
	providers: [
	],
	exports: [
		CardComponent,
		CityTitleComponent,
		CustomHeaderComponent,
		CommentComponent,
		VerdictCardComponent
	]
})
export class PluginsModule { }