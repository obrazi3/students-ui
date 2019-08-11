import { createReducer, on, Action } from '@ngrx/store';

import { IHeaderState } from './header.models';
import { EntityType } from '../dto';
import { setActiveDashboard } from './header.actions';

const initialState: IHeaderState = {
	entityType: EntityType.STUDENTS,
};

const headerReduced = createReducer<IHeaderState>(
	initialState,
	on(setActiveDashboard, (state, { entityType }) => {
		return { ...state, entityType };
	})
);

export const headerFeatureKey = 'header';

export function reducer(state: IHeaderState, action: Action) {
	return headerReduced(state, action);
}
