import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsPageComponent } from './students-page.component';
import { StudentsPageRoutingModule } from './students-page-routing.module';
import { COMPONENTS } from './components';

@NgModule({
	imports: [CommonModule, StudentsPageRoutingModule],
	declarations: [StudentsPageComponent, ...COMPONENTS],
})
export class StudentsPageModule {}
