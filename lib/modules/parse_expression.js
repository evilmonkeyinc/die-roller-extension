"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse_expression = void 0;

var _extensionHandler = require("@smartsheet-bridge/extension-handler");

var _dieRoller = require("@evilmonkeyinc/die-roller");

const parse_expression = params => {
  if (params.expression === undefined) {
    throw new Error('Required parameter "expression" is undefined.');
  }

  const result = (0, _dieRoller.parse)(params.expression);
  return _extensionHandler.ModuleResponse.create({
    value: {
      expression: result.expression,
      expressions: (0, _extensionHandler.serialize)(result.expressions),
      result: result.result
    }
  });
};

exports.parse_expression = parse_expression;