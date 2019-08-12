import { Component, Input } from '@angular/core';

import { IStudent } from '../../../../dto';

@Component({
	selector: 'app-students-grid',
	templateUrl: './students-grid.component.html',
})
export class StudentsGridComponent {
	@Input() students: IStudent[];
}
