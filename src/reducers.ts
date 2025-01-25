import container from '@/components/containers/container.reducer';
import authentication from '@components/modules/auth/auth.reducer';

import sharedReducer from '@components/modules/shared/sharedApi/shared.reducer';

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  container,
  authentication,
  sharedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
