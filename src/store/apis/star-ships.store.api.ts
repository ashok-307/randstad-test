import ReduxQueryAPI from './redux.store.api';

const StarShipsAPI = ReduxQueryAPI.injectEndpoints({
    endpoints: (builder) => ({
        starShips: builder.mutation({
            query: () => {
                return {
                    url: '/starships',
                    method: 'GET',
                }
            },
            transformErrorResponse: (error: any) => {
                return error.data;
            }
        }),
    })
});

export const {
    useStarShipsMutation,
} = StarShipsAPI;

export default StarShipsAPI;
