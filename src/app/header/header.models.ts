import { EntityType } from '../dto';

export interface INavigationDashboard {
	title: string;
	route: string;
	entityType: EntityType;
}

export interface IHeaderState {
	entityType: EntityType;
}

export const NAVIGATION_DASHBOARDS: INavigationDashboard[] = [
	{ title: 'STUDENTS', route: 'students', entityType: EntityType.STUDENTS },
	{ title: 'TEACHERS', route: 'teachers', entityType: EntityType.TEACHERS },
	{ title: 'SUBJECTS', route: 'subjects', entityType: EntityType.SUBJECTS },
	{ title: 'GROUPS', route: 'groups', entityType: EntityType.GROUPS },
];
