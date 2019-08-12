import { Component } from '@angular/core';

import { MOCK_STUDENTS } from '../../mock-data/students';

@Component({
	selector: 'app-students-page',
	templateUrl: './students-page.component.html',
})
export class StudentsPageComponent {
	public students = MOCK_STUDENTS;
}
