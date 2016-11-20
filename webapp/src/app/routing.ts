import {
	RouterModule
} from "@angular/router";
import { NgModule } from "@angular/core";
import {MainPageComponent} from "./components/mainPage/mainPage.component";
import {ProjectDetailsComponent} from "./components/projectDetails/projectDetails.component";
import {AddInitiativeComponent} from "./components/addInitiative/addInitiative.component";
import {StartScreenComponent} from "./components/startScreen/startScreen.component";

@NgModule({
	imports: [
		RouterModule.forRoot([
			{
				path     : '',
				component: StartScreenComponent
			},
			{
				path     : 'projects',
				component: MainPageComponent
			},
			{
				path     : 'initiative/:id',
				component: ProjectDetailsComponent
			},
			{
				path     : 'addInitiative',
				component: AddInitiativeComponent
			}
		])
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {
}