"use strict";

// src/index.js
function genDiff(file1, file2) {
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'stylish';
  return "Comparing ".concat(file1, " and ").concat(file2, " in format: ").concat(format);
}
module.exports = genDiff;