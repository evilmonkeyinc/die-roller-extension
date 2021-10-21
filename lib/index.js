"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;

var _extensionHandler = require("@smartsheet-bridge/extension-handler");

var _parse_expression = require("./modules/parse_expression");

const main = (0, _extensionHandler.createBridgeHandler)({
  modules: {
    parse_expression: _parse_expression.parse_expression
  }
});
exports.main = main;