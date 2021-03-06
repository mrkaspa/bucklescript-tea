// Generated by BUCKLESCRIPT VERSION 1.7.5, PLEASE EDIT WITH CARE
'use strict';

var Js_json = require("bs-platform/lib/js/js_json.js");

function string_of_json($staropt$star, value) {
  var indent = $staropt$star ? $staropt$star[0] : 2;
  if (value !== undefined) {
    try {
      return JSON.stringify(value, null, indent);
    }
    catch (exn){
      return "";
    }
  } else {
    return "undefined";
  }
}

function of_type(_, x) {
  return x;
}

var $$null$1 = null;

var classify = Js_json.classify;

var reifyType = Js_json.reifyType;

var test = Js_json.test;

var decodeString = Js_json.decodeString;

var decodeNumber = Js_json.decodeNumber;

var decodeObject = Js_json.decodeObject;

var decodeArray = Js_json.decodeArray;

var decodeBoolean = Js_json.decodeBoolean;

var decodeNull = Js_json.decodeNull;

exports.classify       = classify;
exports.reifyType      = reifyType;
exports.test           = test;
exports.decodeString   = decodeString;
exports.decodeNumber   = decodeNumber;
exports.decodeObject   = decodeObject;
exports.decodeArray    = decodeArray;
exports.decodeBoolean  = decodeBoolean;
exports.decodeNull     = decodeNull;
exports.string_of_json = string_of_json;
exports.of_type        = of_type;
exports.$$null         = $$null$1;
/* null Not a pure module */
