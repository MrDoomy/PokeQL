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
      return '#4caf50'; // Green
    case Types.POISON:
      return '#9c27b0'; // Purple
    case Types.FEU:
      return '#f44336'; // Red
    case Types.VOL:
      return '#03a9f4'; // Light Blue
    case Types.EAU:
      return '#2196f3'; // Blue
    case Types.INSECTE:
      return '#cddc39'; // Lime
    case Types.NORMAL:
      return '#9e9e9e'; // Grey
    case Types.ELECTRIK:
      return '#ffeb3b'; // Yellow
    case Types.SOL:
      return '#ffc107'; // Amber
    case Types.FEE:
      return '#fedbd0'; // Shrine Pink
    case Types.COMBAT:
      return '#ff5722'; // Deep Orange
    case Types.PSY:
      return '#e91e63'; // Pink
    case Types.ROCHE:
      return '#795548'; // Brown
    case Types.ACIER:
      return '#607d8b'; // Blue Grey
    case Types.GLACE:
      return '#00bcd4'; // Cyan
    case Types.SPECTRE:
      return '#673ab7'; // Deep Purple
    case Types.DRAGON:
      return '#3f51b5'; // Indigo
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
