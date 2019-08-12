import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsPageComponent } from './students-page.component';
import { MainRoutes } from 'src/app/app-routing.module';

const routes: Routes = [
	{
		path: MainRoutes.STUDENTS_ROUTE,
		component: StudentsPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class StudentsPageRoutingModule {}
