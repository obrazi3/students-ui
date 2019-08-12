import { NgModule } from '@angular/core';

import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { StudentsPageModule } from './students-page/students-page.module';

@NgModule({
	imports: [PageNotFoundModule, StudentsPageModule],
	declarations: [],
	exports: [],
})
export class PagesModule {}
