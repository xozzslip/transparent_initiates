import {
	RouterModule
} from "@angular/router";
import { NgModule } from "@angular/core";
import {MainPageComponent} from "./components/mainPage/mainPage.component";
import {ProjectDetailsComponent} from "./components/projectDetails/projectDetails.component";

@NgModule({
	imports: [
		RouterModule.forRoot([
			{
				path     : '',
				component: MainPageComponent
			},
			{
				path     : 'initiative/:id',
				component: ProjectDetailsComponent
			}
		])
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {
}