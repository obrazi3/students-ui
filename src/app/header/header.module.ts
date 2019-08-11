import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { HeaderComponent } from './header.component';
import { reducer, headerFeatureKey } from './header.reducer';

@NgModule({
	imports: [CommonModule, StoreModule.forFeature(headerFeatureKey, reducer)],
	declarations: [HeaderComponent],
	exports: [HeaderComponent],
})
export class HeaderModule {}
