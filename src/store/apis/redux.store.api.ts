import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ReduxQueryAPI = () => {
    return createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({
            baseUrl: process.env.REACT_APP_API_DOMAIN,
            prepareHeaders: (headers) => {
                headers.set('Content-Type', 'application/json');
                return headers;
            }
        }),
        tagTypes: ['Post'],
        endpoints: () => ({})
    
    });
};

export default ReduxQueryAPI();
