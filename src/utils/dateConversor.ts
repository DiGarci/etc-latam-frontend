import { DateTime } from 'luxon';

export const dateConversor = (date: string): string => {
    const dateConversor = DateTime.fromISO(date);
    return dateConversor.toISOWeekDate();
}
