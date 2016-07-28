(function(global, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define(factory);
  else global.KeyCode = factory();
}(this, function() {
  'use strict';

  var KeyCode = {};

  //Key Code values
  KeyCode.A = 65;
  KeyCode.B = 66;
  KeyCode.C = 67;
  KeyCode.D = 68;
  KeyCode.E = 69;
  KeyCode.F = 70;
  KeyCode.G = 71;
  KeyCode.H = 72;
  KeyCode.I = 73;
  KeyCode.J = 74;
  KeyCode.K = 75;
  KeyCode.L = 76;
  KeyCode.M = 77;
  KeyCode.N = 78;
  KeyCode.O = 79;
  KeyCode.P = 80;
  KeyCode.Q = 81;
  KeyCode.R = 82;
  KeyCode.S = 83;
  KeyCode.T = 84;
  KeyCode.U = 85;
  KeyCode.V = 86;
  KeyCode.W = 87;
  KeyCode.X = 88;
  KeyCode.Y = 89;
  KeyCode.Z = 90;

  //NUMBERS
  KeyCode.ZERO = 48;
  KeyCode.ONE = 49;
  KeyCode.TWO = 50;
  KeyCode.THREE = 51;
  KeyCode.FOUR = 52;
  KeyCode.FIVE = 53;
  KeyCode.SIX = 54;
  KeyCode.SEVEN = 55;
  KeyCode.EIGHT = 56;
  KeyCode.NINE = 57;

  //NUMPAD
  KeyCode.NUMPAD_0 = 96;
  KeyCode.NUMPAD_1 = 97;
  KeyCode.NUMPAD_2 = 98;
  KeyCode.NUMPAD_3 = 99;
  KeyCode.NUMPAD_4 = 100;
  KeyCode.NUMPAD_5 = 101;
  KeyCode.NUMPAD_6 = 102;
  KeyCode.NUMPAD_7 = 103;
  KeyCode.NUMPAD_8 = 104;
  KeyCode.NUMPAD_9 = 105;
  KeyCode.NUMPAD_MULTIPLY = 106;
  KeyCode.NUMPAD_ADD = 107;
  KeyCode.NUMPAD_ENTER = 108;
  KeyCode.NUMPAD_SUBTRACT = 109;
  KeyCode.NUMPAD_DECIMAL = 110;
  KeyCode.NUMPAD_DIVIDE = 111;

  //FUNCTION KEYS
  KeyCode.F1 = 112;
  KeyCode.F2 = 113;
  KeyCode.F3 = 114;
  KeyCode.F4 = 115;
  KeyCode.F5 = 116;
  KeyCode.F6 = 117;
  KeyCode.F7 = 118;
  KeyCode.F8 = 119;
  KeyCode.F9 = 120;
  KeyCode.F10 = 121;
  KeyCode.F11 = 122;
  KeyCode.F12 = 123;
  KeyCode.F13 = 124;
  KeyCode.F14 = 125;
  KeyCode.F15 = 126;

  //SYMBOLS
  KeyCode.COLON = 186;
  KeyCode.EQUALS = 187;
  KeyCode.UNDERSCORE = 189;
  KeyCode.QUESTION_MARK = 191;
  KeyCode.TILDE = 192;
  KeyCode.OPEN_BRACKET = 219;
  KeyCode.BACKWARD_SLASH = 220;
  KeyCode.CLOSED_BRACKET = 221;
  KeyCode.QUOTES = 222;
  KeyCode.LESS_THAN = 188;
  KeyCode.GREATER_THAN = 190;

  //OTHER KEYS    
  KeyCode.BACKSPACE = 8;
  KeyCode.TAB = 9;
  KeyCode.CLEAR = 12;
  KeyCode.ENTER = 13;
  KeyCode.SHIFT = 16;
  KeyCode.CONTROL = 17;
  KeyCode.ALT = 18;
  KeyCode.CAPS_LOCK = 20;
  KeyCode.ESC = 27;
  KeyCode.SPACEBAR = 32;
  KeyCode.PAGE_UP = 33;
  KeyCode.PAGE_DOWN = 34;
  KeyCode.END = 35;
  KeyCode.HOME = 36;
  KeyCode.LEFT = 37;
  KeyCode.UP = 38;
  KeyCode.RIGHT = 39;
  KeyCode.DOWN = 40;
  KeyCode.INSERT = 45;
  KeyCode.DELETE = 46;
  KeyCode.HELP = 47;
  KeyCode.NUM_LOCK = 144;

  return KeyCode;
}));