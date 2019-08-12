import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { IStudent } from 'src/app/dto';

@Component({
	selector: 'app-students-grid-line',
	templateUrl: './students-grid-line.component.html',
	styleUrls: ['./students-grid-line.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsGridLineComponent {
	@Input() student: IStudent;
}
