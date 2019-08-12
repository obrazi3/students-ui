import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsPageComponent } from './students-page.component';
import { StudentsPageRoutingModule } from './students-page-routing.module';

@NgModule({
	imports: [CommonModule, StudentsPageRoutingModule],
	declarations: [StudentsPageComponent],
})
export class StudentsPageModule {}
