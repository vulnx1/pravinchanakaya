/**
 * Formats a number according to the specified locale
 * @param {number} number - The number to format
 * @param {string} [locale] - The locale to use (e.g., 'hi-IN', 'en-US'). If not provided, uses browser's language.
 * @returns {string} Formatted number as a string
 */
export const formatNumber = (number: number, locale: string = 'en-IN'): string => {
  try {
    return new Intl.NumberFormat(locale).format(number);
  } catch (error) {
    console.error('Error formatting number:', error);
    return number.toString(); // Fallback to default string representation
  }
};
