import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export const getFormatDistanceToNow = (date: Date | number) => {
    const fromNow = formatDistanceToNow(date, {
        locale: es,
    });
    return 'Creada hace ' + fromNow;
}