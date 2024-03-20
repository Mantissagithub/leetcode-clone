import dayjs from 'dayjs';

export const formatDateTime = (datetime: string) => dayjs(datetime).format('MMM D, YYYY h:mm A');

export const formatRelativeTimestamp = (timestamp: number) => `${Math.floor((Date.now() - timestamp) / 3600000)} hour ago`;