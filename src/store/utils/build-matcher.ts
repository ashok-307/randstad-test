import { ActionReducerMapBuilder, createAction, isAnyOf } from "@reduxjs/toolkit";


export const buildMatcher = (
    builder: ActionReducerMapBuilder<any>,
    actionName: string,
    API: any,
    mutationName: string,
    actions?: {
        pending?: (state?: any, action?: any) => void,
        fulfilled?: (state?: any, action?: any) => void,
        rejected?: (state?: any, action?: any) => void,
    }
) => {

    const apiMatcher = createAction(actionName);
    const actionPending = isAnyOf(apiMatcher, API.endpoints[mutationName].matchPending);
    const actionFulfilled = isAnyOf(apiMatcher, API.endpoints[mutationName].matchFulfilled);
    const actionRejected = isAnyOf(apiMatcher, API.endpoints[mutationName].matchRejected);

    builder.addMatcher(actionPending, (state: any, action) => {
        state.isLoading = true;
        actions?.pending && actions?.pending(state, action);
    })
    builder.addMatcher(actionFulfilled, (state: any, action:any) => {
        state.isLoading = false;
        actions?.fulfilled && actions?.fulfilled(state, action);
    })
    builder.addMatcher(actionRejected, (state: any, action:any) => {
        state.isLoading = false;
        actions?.rejected && actions?.rejected(state, action);
    })
};
