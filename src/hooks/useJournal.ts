import {useState, useEffect, useCallback} from 'react';
import {useAppContext} from '../context/AppContext.tsx';
import {getTodayKey} from '../utils/dateHelpers';
import store from '../store/store.ts';
import {updateJournal} from '../store/storeJournal.ts';

export const useJournal = (date: string) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const dateKey = date || getTodayKey();
        // @ts-ignore
        const entry = store.getState()?.journal?.JournalList[dateKey] || '';

        console.log(dateKey, entry);
        setContent(entry || '');
    }, [date]);

    const updateContent = useCallback((newContent: string) => {
        setContent(newContent);
        store.dispatch(updateJournal({date: date, journal: newContent}));
    }, []);

    return {
        content,
        updateContent,
    };
};
