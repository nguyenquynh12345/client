import { RootState } from '@/reducers';
import { IInitialState } from '@/shared/shared-interfaces';
import { PayloadAction, createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';

import { getEntities } from './api';

export const initialExpertFilter = {
    page: 0,
    size: 10,
};
export interface ISearchState extends IInitialState {

}
const initialState: ISearchState = {
    fetchEntitiesSuccess: false,
    fetchEntitySuccess: false,
    updateEntitySuccess: false,
    deleteEntitySuccess: false,
    loading: false,
    errorMessage: null,
    errorCode: null,
    totalItems: 0,
    totalPages: 0,
};

export const expertAdapter = createEntityAdapter({
    selectId: ({ id }: any) => id,
});

const { actions, reducer } = createSlice({
    name: 'searchSlice',
    initialState: expertAdapter.getInitialState({ initialState }),
    reducers: {
        fetching(state) {
            state.initialState.loading = true;
        },
        resetAll(state) {
            state.initialState.fetchEntitiesSuccess = false;
            state.initialState.fetchEntitySuccess = false;
            state.initialState.updateEntitySuccess = false;
            state.initialState.deleteEntitySuccess = false;
            state.initialState.loading = false;
            state.initialState.errorMessage = null;
            state.initialState.errorCode = null;
            state.initialState.totalItems = 0;
            state.initialState.totalPages = 0;
        },
        resetEntity(state) {
            state.initialState.fetchEntitiesSuccess = false;
            state.initialState.fetchEntitySuccess = false;
            state.initialState.updateEntitySuccess = false;
            state.initialState.deleteEntitySuccess = false;
            state.initialState.loading = false;
            state.initialState.errorMessage = null;
            state.initialState.errorCode = null;
        },
        resetState(state) {
            expertAdapter.removeAll(state);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getEntities.fulfilled.type, (state, { payload }: PayloadAction<any>) => {
            state.initialState.totalItems = payload.totalItems;
            state.initialState.totalPages = payload.totalPages;
            expertAdapter.setAll(state, payload);
            state.initialState.fetchEntitiesSuccess = true;
            state.initialState.loading = false;
        });
        builder.addCase(getEntities.rejected.type, (state, { payload }: PayloadAction<any>) => {
            state.initialState.errorMessage = payload?.message;
            state.initialState.errorCode = payload?.code;
            state.initialState.fetchEntitiesSuccess = false;
            state.initialState.loading = false;
        });
    },
});

export const { fetching, resetAll, resetEntity, resetState } = actions;
export default reducer;

export const searchSelector = expertAdapter.getSelectors((state: RootState) => state.searchReducer);

const getExpertState = (state: RootState) => state.searchReducer;
const { selectById } = expertAdapter.getSelectors();

export const selectEntityById = (id: number) => {
    return createSelector(getExpertState, (state) => selectById(state, id));
};
