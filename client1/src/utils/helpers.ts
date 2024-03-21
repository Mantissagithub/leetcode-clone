// src/utils/helpers.ts

/**
 * Generates random UUID v4
 */
export const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };
  
  /**
   * Converts seconds to minutes and seconds format
   * @param timeSeconds Seconds to convert
   */
  export const formatTimeFromSeconds = (timeSeconds: number): string => {
    if (timeSeconds <= 0) {
      return '0:00';
    }
  
    const minutes = Math.floor(timeSeconds / 60);
    const seconds = timeSeconds % 60;
  
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
  };