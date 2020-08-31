import {createSelector} from 'reselect';

const selectDirectory = (state) => state.directorySections;

export const selectDirectorySections = createSelector([selectDirectory], directory => directory.sections)

