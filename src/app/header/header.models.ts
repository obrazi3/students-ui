interface INavigationDashboard {
	title: string;
	route: string;
}

export const NAVIGATION_DASHBOARDS: INavigationDashboard[] = [
	{ title: 'STUDENTS', route: 'students' },
	{ title: 'TEACHERS', route: 'teachers' },
	{ title: 'SUBJECTS', route: 'subjects' },
	{ title: 'GROUPS', route: 'groups' },
];
