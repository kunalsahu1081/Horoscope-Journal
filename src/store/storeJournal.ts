import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import moment from 'moment';



interface IjournalState {
    JournalList: object;
}

const initialState: IjournalState = {
    JournalList: {},
};

const JournalDataSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {

        addJournal: (state, action: PayloadAction<string>) => {
            const current_date = moment().format('YYYY-MM-DD');
            // @ts-ignore
            state.JournalList[current_date] = action.payload;
        },

        updateJournal: (state, action: PayloadAction<{date: string, journal: string}>) => {
            // @ts-ignore
            state.JournalList[action.payload.date] = action.payload.journal;
        },

        deleteJournal: (state, action: PayloadAction<{date: string}>) => {
            // @ts-ignore
            if (state.JournalList[action.payload.date]) {
                // @ts-ignore
                delete state.JournalList[action.payload.date];
            }
        }
    },
});

export const {
    addJournal,
    updateJournal,
    deleteJournal,
} = JournalDataSlice.actions;

export default JournalDataSlice.reducer;
