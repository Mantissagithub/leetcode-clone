export const truncateString = (str: string, length: number) => str.length <= length ? str : str.substring(0, length) + '...';