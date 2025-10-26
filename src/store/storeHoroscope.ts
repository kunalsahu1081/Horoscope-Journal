import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IHoroscope {
    date: string;
    horoscope: string;
    sign: string;
}

interface IHoroscopeStore {
    horoscopeList: IHoroscope[];
    lastRefreshed: string;
}

const initialState: IHoroscopeStore = {
    horoscopeList: [],
    lastRefreshed: '',
};

const HoroscopeDataSlice = createSlice({
    name: 'horoscope',
    initialState,
    reducers: {
        storeHoroscope: (state, action: PayloadAction<IHoroscope>) => {
            state.horoscopeList.push(action.payload);
            return state;
        },

        removeHoroscope: (state, action: PayloadAction<number>) => {
            state.horoscopeList.splice(action.payload, 1);
        }
    },
});

export const {
    storeHoroscope,
    removeHoroscope,
} = HoroscopeDataSlice.actions;

export default HoroscopeDataSlice.reducer;
