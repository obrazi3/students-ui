import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export enum MainRoutes {
	STUDENTS_ROUTE = 'students',
	TEACHERS_ROUTE = 'teachers',
	SUBJECTS_ROUTE = 'subjects',
	GROUPS_ROUTE = 'groups',
}

const routes: Routes = [
	{ path: '', redirectTo: `/${MainRoutes.STUDENTS_ROUTE}`, pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
