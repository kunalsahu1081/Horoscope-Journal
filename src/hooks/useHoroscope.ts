import {useState, useEffect} from 'react';
import {horoscopeService} from '../services/horoscopeService';
import moment from 'moment';
import {IHoroscope} from '../store/storeHoroscope.ts';

export const useHoroscope = (sign: string) => {
    const [horoscope, setHoroscope] = useState<IHoroscope>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(sign, 'sign');
        fetchHoroscope().then();
    }, [sign]);

    const fetchHoroscope = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await horoscopeService.fetchHoroscope(sign, moment());
            setHoroscope(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const refresh = () => {
        fetchHoroscope();
    };

    return {horoscope, loading, error, refresh};
};
