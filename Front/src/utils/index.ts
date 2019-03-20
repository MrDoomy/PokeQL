import * as Types from '../constants';

/**
 * Convert Numeric To Text
 *
 * @param {Number} numeric Numeric
 * @param {Number} length Text Length (Default: 1)
 * @returns {String} Text
 */
export const convertNumericToText = (numeric: number, length: number = 1): string => {
  const numericLength = `${numeric}`.length - 1;
  return Array(length - numericLength).join('0') + numeric;
};

/**
 * Convert Type To Hex Color
 *
 * @param {String} type Type
 * @return {String} Hex Color
 */
export const convertTypeToHexColor = (type: string): string => {
  switch (type) {
    case Types.PLANTE:
      return '#66bb6a'; // Green
    case Types.POISON:
      return '#ab47bc'; // Purple
    case Types.FEU:
      return '#ef5350'; // Red
    case Types.VOL:
      return '#29b6f6'; // Light Blue
    case Types.EAU:
      return '#42a5f5'; // Blue
    case Types.INSECTE:
      return '#d4e157'; // Lime
    case Types.NORMAL:
      return '#d2d2d2'; // Grey
    case Types.ELECTRIK:
      return '#ffee58'; // Yellow
    case Types.SOL:
      return '#ffca28'; // Amber
    case Types.FEE:
      return '#fedbd0'; // Shrine Pink
    case Types.COMBAT:
      return '#ff7043'; // Deep Orange
    case Types.PSY:
      return '#ec407a'; // Pink
    case Types.ROCHE:
      return '#8d6e63'; // Brown
    case Types.ACIER:
      return '#78909c'; // Blue Grey
    case Types.GLACE:
      return '#26c6da'; // Cyan
    case Types.SPECTRE:
      return '#7e57c2'; // Deep Purple
    case Types.DRAGON:
      return '#5c6bc0'; // Indigo
    case Types.TENEBRES:
      return '#424242'; // Dark
    default:
      return '#d2d2d2';
  }
};

/**
 * Capitalize
 *
 * @param {String} text Text
 * @returns {String} Capitalized Text
 */
export const capitalize = (text: string): string => text.charAt(0).toUpperCase() + text.substring(1, text.length);

/**
 * Check If Current Env Is Dev
 *
 * @param {Boolean} expect Expectation (Default: true)
 * @returns {Boolean} Expectation Result
 */
export const isDevEnv = (expect: boolean = true): boolean => process.env.NODE_ENV === 'development' === expect;
