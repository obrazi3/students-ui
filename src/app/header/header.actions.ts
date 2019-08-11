import { createAction, props } from '@ngrx/store';

import { IHeaderState } from './header.models';

export const setActiveDashboard = createAction('[HEADER] Set Active Dashboard', props<IHeaderState>());
