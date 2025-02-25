import axiosFactory from '@/shared/config/axios-interceptor';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getEntities = createAsyncThunk(
    `get-list-rooms`,
    async ({ q, price, region, categories }: { q?: string; price?: string; region?: number; categories?: string }, thunkAPI) => {
        try {
            const params = new URLSearchParams();
            if (q) params.append('q', q);
            if (price) params.append('price', price);
            if (region) params.append('location', region.toString());
            if (categories) params.append('category', categories.toString());
            const { data } = await axiosFactory.get(`listings/search?${params.toString()}`);
            return data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
