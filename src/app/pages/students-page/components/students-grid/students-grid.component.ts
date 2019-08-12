import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { IStudent } from '../../../../dto';

@Component({
	selector: 'app-students-grid',
	templateUrl: './students-grid.component.html',
	styleUrls: ['./students-grid.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsGridComponent {
	@Input() students: IStudent[];
}
