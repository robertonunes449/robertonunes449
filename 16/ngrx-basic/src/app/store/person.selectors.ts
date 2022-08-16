import * as fromPersonReducer from './person.reducer';
import { createFeatureSelector } from '@ngrx/store';

export const PeopleState = createFeatureSelector<fromPersonReducer.PeopleState>('people');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal } = fromPersonReducer.peopleAdapter.getSelectors(PeopleState);