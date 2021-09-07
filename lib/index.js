"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _utils() {
  const data = require("@umijs/utils");

  _utils = function _utils() {
    return data;
  };

  return data;
}

function _path() {
  const data = require("path");

  _path = function _path() {
    return data;
  };

  return data;
}

var _getDisplayContent = _interopRequireDefault(require("./getDisplayContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DIR_NAME = 'plugin-mobile-display';

var _default = api => {
  api.onGenerateFiles(() => {
    api.writeTmpFile({
      path: (0, _path().join)(DIR_NAME, 'display.tsx'),
      content: (0, _getDisplayContent.default)()
    });
  });
  api.modifyRoutes(routes => {
    routes.unshift({
      path: '/all-components',
      component: (0, _utils().winPath)((0, _path().join)(api.paths.absTmpPath || '', DIR_NAME, 'display.tsx'))
    });
    return routes;
  });
};

exports.default = _default;