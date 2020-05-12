import { createSelector } from "reselect";

const selectDirect = (state) => state.directory;

export const selectDirectorySection = createSelector(
  [selectDirect],
  (directory) => directory.sections
);
