import {getHoroscope} from './axiosFetchHoroscope.ts';
import moment from 'moment';
import store from '../store/store.ts';
import {removeHoroscope, storeHoroscope} from '../store/storeHoroscope.ts';

export const horoscopeService = {
    async fetchHoroscope(sign: string, day = moment()) {
        try {
            // check from storage first
            const formattedDate = moment(day).format('YYYY-MM-DD');
            const cachedHoroscopeList =
                store.getState().horoscope.horoscopeList;

            if (cachedHoroscopeList?.length > 0) {

                // find horoscope value of current sign and date
                const horoscopeValue = cachedHoroscopeList.find(
                    horoscope =>
                        horoscope.date === formattedDate &&
                        horoscope.sign === sign,
                );

                // if horoscope found of previous date remove it
                if (!horoscopeValue) {
                    const prevHoroscopeValue = cachedHoroscopeList.findIndex(
                        horoscope =>
                            horoscope.sign === sign,
                    );

                    if (prevHoroscopeValue >= 0) {
                        store.dispatch(removeHoroscope(prevHoroscopeValue));
                    }
                }

                if (horoscopeValue) {
                    return horoscopeValue;
                }
            }

            const result = await getHoroscope('/horoscope', {
                zodiac: sign,
                day: formattedDate,
            });

            if (result?.data?.horoscope) {
                const horoscope: string = result.data.horoscope;
                const sign: string = result.data.sign;
                const date: string = result.data.date;
                store.dispatch(storeHoroscope({horoscope, date, sign}));
                return {horoscope, date, sign};
            }
        } catch (e) {
            console.log(e);
        }
    },
};
