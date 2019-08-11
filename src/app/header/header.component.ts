import { Component } from '@angular/core';

import { NAVIGATION_DASHBOARDS } from './header.models';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	public navDashboards = NAVIGATION_DASHBOARDS;
}
