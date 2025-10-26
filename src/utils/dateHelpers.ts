export const formatDate = (date) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export const formatShortDate = (date) => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export const getDateKey = (date) => {
  return date.toISOString().split('T')[0];
};

export const getTodayKey = () => {
  return getDateKey(new Date());
};

export const sortEntriesByDate = (entries: any) => {
  return Object.entries(entries)
    .sort(([dateA], [dateB]) => new Date(dateB) - new Date(dateA))
    .reduce((acc, [date, entry]) => {
      acc[date] = entry;
      return acc;
    }, {});
};
