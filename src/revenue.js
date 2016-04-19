var constants = require('./constants');
var type = require('./type');
var utils = require('./utils');

/*
 * Wrapper for logging Revenue data. Revenue objects get passed to amplitude.logRevenueV2 to send to Amplitude servers.
 * Note: productId and price are required fields. If quantity is not specified, then defaults to 1.
 */

/**
 * Revenue API - instance constructor. Revenue objects are a wrapper for revenue data.
 * Each method updates a revenue property in the Revenue object, and returns the same Revenue object,
 * allowing you to chain multiple method calls together.
 * Note: productId and price are required fields to log revenue events.
 * If quantity is not specified then defaults to 1.
 * See [Readme]{@link https://github.com/amplitude/Amplitude-Javascript#tracking-revenue} for more information
 * about logging Revenue.
 * @constructor Revenue
 * @public
 * @example var revenue = new amplitude.Revenue();
 */
var Revenue = function Revenue() {
  // required fields
  this._productId = null;
  this._quantity = 1;
  this._price = null;

  // optional fields
  this._revenueType = null;
  this._properties = null;
};

/**
 * Set a value for the product identifer. This field is required for all revenue being logged.
 * @public
 * @param {string} productId - The value for the product identifier. Empty and invalid strings are ignored.
 * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
 * @example var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99);
 * amplitude.logRevenueV2(revenue);
 */
Revenue.prototype.setProductId = function setProductId(productId) {
  if (type(productId) !== 'string') {
    utils.log('Unsupported type for productId: ' + type(productId) + ', expecting string');
  } else if (utils.isEmptyString(productId)) {
    utils.log('Invalid empty productId');
  } else {
    this._productId = productId;
  }
  return this;
};

/**
 * Set a value for the quantity. Note revenue amount is calculated as price * quantity.
 * @public
 * @param {number} quantity - Integer value for the quantity. If not set, quantity defaults to 1.
 * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
 * @example var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99).setQuantity(5);
 * amplitude.logRevenueV2(revenue);
 */
Revenue.prototype.setQuantity = function setQuantity(quantity) {
  if (type(quantity) !== 'number') {
    utils.log('Unsupported type for quantity: ' + type(quantity) + ', expecting number');
  } else {
    this._quantity = parseInt(quantity);
  }
  return this;
};

/**
 * Set a value for the price. This field is required for all revenue being logged.
 * Note revenue amount is calculated as price * quantity.
 * @public
 * @param {number} price - Double value for the quantity.
 * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
 * @example var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99);
 * amplitude.logRevenueV2(revenue);
 */
Revenue.prototype.setPrice = function setPrice(price) {
  if (type(price) !== 'number') {
    utils.log('Unsupported type for price: ' + type(price) + ', expecting number');
  } else {
    this._price = price;
  }
  return this;
};

/**
 * Set a value for the revenueType (for example purchase, cost, tax, refund, etc).
 * @public
 * @param {string} revenueType - RevenueType to designate.
 * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
 * @example var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99).setRevenueType('purchase');
 * amplitude.logRevenueV2(revenue);
 */
Revenue.prototype.setRevenueType = function setRevenueType(revenueType) {
  if (type(revenueType) !== 'string') {
    utils.log('Unsupported type for revenueType: ' + type(revenueType) + ', expecting string');
  } else {
    this._revenueType = revenueType;
  }
  return this;
};

/**
 * Set event properties for the revenue event.
 * @public
 * @param {object} properties - Revenue event properties to set.
 * @return {Revenue} Returns the same Revenue object, allowing you to chain multiple method calls together.
 * @example var event_properties = {'city': 'San Francisco'};
 * var revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99).setRevenueProperties(event_properties);
 * amplitude.logRevenueV2(revenue);
*/
Revenue.prototype.setRevenueProperties = function setRevenueProperties(revenueProperties) {
  if (type(revenueProperties) !== 'object') {
    utils.log('Unsupported type for revenueProperties: ' + type(revenueProperties) + ', expecting object');
  } else {
    this._properties = utils.validateProperties(revenueProperties);
  }
  return this;
};

/**
 * @private
 */
Revenue.prototype._isValidRevenue = function _isValidRevenue() {
  if (type(this._productId) !== 'string' || utils.isEmptyString(this._productId)) {
    utils.log('Invalid revenue, need to set productId field');
    return false;
  }
  if (type(this._price) !== 'number') {
    utils.log('Invalid revenue, need to set price field');
    return false;
  }
  return true;
};

/**
 * @private
 */
Revenue.prototype._toJSONObject = function _toJSONObject() {
  var obj = type(this._properties) === 'object' ? this._properties : {};
  obj[constants.REVENUE_PRODUCT_ID] = this._productId;
  obj[constants.REVENUE_QUANTITY] = this._quantity;
  obj[constants.REVENUE_PRICE] = this._price;
  obj[constants.REVENUE_REVENUE_TYPE] = this._revenueType;
  return obj;
};

module.exports = Revenue;