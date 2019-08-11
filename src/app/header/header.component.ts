import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { NAVIGATION_DASHBOARDS, IHeaderState } from './header.models';
import { EntityType } from '../dto';
import { setActiveDashboard } from './header.actions';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	public navDashboards = NAVIGATION_DASHBOARDS;

	constructor(private store: Store<IHeaderState>) {}

	public onDashboardClick(entityType: EntityType) {
		this.store.dispatch(setActiveDashboard({ entityType }));
	}
}
