import { EntityType } from '../dto';
import { MainRoutes } from '../app-routing.module';

export interface INavigationDashboard {
	title: string;
	route: MainRoutes;
	entityType: EntityType;
}

export interface IHeaderState {
	entityType: EntityType;
}

export const NAVIGATION_DASHBOARDS: INavigationDashboard[] = [
	{ title: 'STUDENTS', route: MainRoutes.STUDENTS_ROUTE, entityType: EntityType.STUDENTS },
	{ title: 'TEACHERS', route: MainRoutes.TEACHERS_ROUTE, entityType: EntityType.TEACHERS },
	{ title: 'SUBJECTS', route: MainRoutes.SUBJECTS_ROUTE, entityType: EntityType.SUBJECTS },
	{ title: 'GROUPS', route: MainRoutes.GROUPS_ROUTE, entityType: EntityType.GROUPS },
];
