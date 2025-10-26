export const ZODIAC_SIGNS = [
    {label: 'Aries', value: 'aries', emoji: '♈', dates: 'Mar 21 - Apr 19'},
    {label: 'Taurus', value: 'taurus', emoji: '♉', dates: 'Apr 20 - May 20'},
    {label: 'Gemini', value: 'gemini', emoji: '♊', dates: 'May 21 - Jun 20'},
    {label: 'Cancer', value: 'cancer', emoji: '♋', dates: 'Jun 21 - Jul 22'},
    {label: 'Leo', value: 'leo', emoji: '♌', dates: 'Jul 23 - Aug 22'},
    {label: 'Virgo', value: 'virgo', emoji: '♍', dates: 'Aug 23 - Sep 22'},
    {label: 'Libra', value: 'libra', emoji: '♎', dates: 'Sep 23 - Oct 22'},
    {label: 'Scorpio', value: 'scorpio', emoji: '♏', dates: 'Oct 23 - Nov 21'},
    {
        label: 'Sagittarius',
        value: 'sagittarius',
        emoji: '♐',
        dates: 'Nov 22 - Dec 21',
    },
    {
        label: 'Capricorn',
        value: 'capricorn',
        emoji: '♑',
        dates: 'Dec 22 - Jan 19',
    },
    {
        label: 'Aquarius',
        value: 'aquarius',
        emoji: '♒',
        dates: 'Jan 20 - Feb 18',
    },
    {label: 'Pisces', value: 'pisces', emoji: '♓', dates: 'Feb 19 - Mar 20'},
];

export const STORAGE_KEYS = {
    SELECTED_SIGN: '@astro_journal:selected_sign',
    JOURNAL_ENTRIES: '@astro_journal:journal_entries',
    HOROSCOPE_CACHE: '@astro_journal:horoscope_cache',
};

export const COLORS = {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    background: '#f8fafc',
    cardBackground: '#ffffff',
    text: '#1e293b',
    textSecondary: '#64748b',
    border: '#e2e8f0',
    error: '#ef4444',
    success: '#10b981',
    gradient: ['#6366f1', '#8b5cf6'],
};
