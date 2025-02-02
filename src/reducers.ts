import container from '@/components/containers/container.reducer';
import authentication from '@components/modules/auth/auth.reducer';
import defReducer from '@components/modules/default/def.reducer';
import searchReducer from '@components/modules/search/reducer';

import sharedReducer from '@components/modules/shared/sharedApi/shared.reducer';

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  container,
  authentication,
  sharedReducer,
  defReducer,
  searchReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
