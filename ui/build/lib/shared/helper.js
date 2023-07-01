"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundToNearestNumber = exports.formatValuation = exports.filterRecords = exports.convertToMoneyString = exports.capitaliseString = void 0;
var _reactI18next = require("react-i18next");
const filterRecords = obj => {
  if (!obj) {
    return undefined;
  }
  const filteredObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value) {
      filteredObj[key] = value;
    }
  }
  return filteredObj;
};
exports.filterRecords = filterRecords;
const capitaliseString = str => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.capitaliseString = capitaliseString;
const convertToMoneyString = value => {
  if (!value) {
    return;
  }
  const locale = (0, _reactI18next.getI18n)().language;
  return new Intl.NumberFormat(locale).format(value);
};
exports.convertToMoneyString = convertToMoneyString;
const roundToNearestNumber = (value, roundTo) => {
  if (!value) {
    return value;
  }
  return Math.round(value / roundTo) * roundTo;
};
exports.roundToNearestNumber = roundToNearestNumber;
const formatValuation = value => {
  if (!value) {
    return;
  }
  const rounded = roundToNearestNumber(value, 100);
  return convertToMoneyString(rounded);
};
exports.formatValuation = formatValuation;