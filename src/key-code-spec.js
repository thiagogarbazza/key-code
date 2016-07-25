'use strict';
const expect = require('chai').expect;

describe('key-code test', () => {
  let KeyCode;

  beforeEach(() => {
    KeyCode = require('./key-code.js');
  });

  it('should do what defined KeyCode', () => {
    expect(KeyCode).to.be.defined;
  });

  describe('Keys code for letters', () => {
    it('should do what defined KeyCode.A', () => {
      expect(KeyCode.A).to.be.defined;
      expect(KeyCode.A).to.deep.equal(65);
    });

    it('should do what defined KeyCode.B', () => {
      expect(KeyCode.B).to.be.defined;
      expect(KeyCode.B).to.deep.equal(66);
    });

    it('should do what defined KeyCode.C', () => {
      expect(KeyCode.C).to.be.defined;
      expect(KeyCode.C).to.deep.equal(67);
    });

    it('should do what defined KeyCode.D', () => {
      expect(KeyCode.D).to.be.defined;
      expect(KeyCode.D).to.deep.equal(68);
    });

    it('should do what defined KeyCode.E', () => {
      expect(KeyCode.E).to.be.defined;
      expect(KeyCode.E).to.deep.equal(69);
    });

    it('should do what defined KeyCode.F', () => {
      expect(KeyCode.F).to.be.defined;
      expect(KeyCode.F).to.deep.equal(70);
    });

    it('should do what defined KeyCode.G', () => {
      expect(KeyCode.G).to.be.defined;
      expect(KeyCode.G).to.deep.equal(71);
    });

    it('should do what defined KeyCode.H', () => {
      expect(KeyCode.H).to.be.defined;
      expect(KeyCode.H).to.deep.equal(72);
    });

    it('should do what defined KeyCode.I', () => {
      expect(KeyCode.I).to.be.defined;
      expect(KeyCode.I).to.deep.equal(73);
    });

    it('should do what defined KeyCode.J', () => {
      expect(KeyCode.J).to.be.defined;
      expect(KeyCode.J).to.deep.equal(74);
    });

    it('should do what defined KeyCode.K', () => {
      expect(KeyCode.K).to.be.defined;
      expect(KeyCode.K).to.deep.equal(75);
    });

    it('should do what defined KeyCode.L', () => {
      expect(KeyCode.L).to.be.defined;
      expect(KeyCode.L).to.deep.equal(76);
    });

    it('should do what defined KeyCode.M', () => {
      expect(KeyCode.M).to.be.defined;
      expect(KeyCode.M).to.deep.equal(77);
    });

    it('should do what defined KeyCode.N', () => {
      expect(KeyCode.N).to.be.defined;
      expect(KeyCode.N).to.deep.equal(78);
    });

    it('should do what defined KeyCode.O', () => {
      expect(KeyCode.O).to.be.defined;
      expect(KeyCode.O).to.deep.equal(79);
    });

    it('should do what defined KeyCode.P', () => {
      expect(KeyCode.P).to.be.defined;
      expect(KeyCode.P).to.deep.equal(80);
    });

    it('should do what defined KeyCode.Q', () => {
      expect(KeyCode.Q).to.be.defined;
      expect(KeyCode.Q).to.deep.equal(81);
    });

    it('should do what defined KeyCode.R', () => {
      expect(KeyCode.R).to.be.defined;
      expect(KeyCode.R).to.deep.equal(82);
    });

    it('should do what defined KeyCode.S', () => {
      expect(KeyCode.S).to.be.defined;
      expect(KeyCode.S).to.deep.equal(83);
    });

    it('should do what defined KeyCode.T', () => {
      expect(KeyCode.T).to.be.defined;
      expect(KeyCode.T).to.deep.equal(84);
    });

    it('should do what defined KeyCode.U', () => {
      expect(KeyCode.U).to.be.defined;
      expect(KeyCode.U).to.deep.equal(85);
    });

    it('should do what defined KeyCode.V', () => {
      expect(KeyCode.V).to.be.defined;
      expect(KeyCode.V).to.deep.equal(86);
    });

    it('should do what defined KeyCode.W', () => {
      expect(KeyCode.W).to.be.defined;
      expect(KeyCode.W).to.deep.equal(87);
    });

    it('should do what defined KeyCode.X', () => {
      expect(KeyCode.X).to.be.defined;
      expect(KeyCode.X).to.deep.equal(88);
    });

    it('should do what defined KeyCode.Y', () => {
      expect(KeyCode.Y).to.be.defined;
      expect(KeyCode.Y).to.deep.equal(89);
    });

    it('should do what defined KeyCode.Z', () => {
      expect(KeyCode.Z).to.be.defined;
      expect(KeyCode.Z).to.deep.equal(90);
    });
  });

  describe('keys code for numbers', () => {
    it('should do what defined KeyCode.ZERO', () => {
      expect(KeyCode.ZERO).to.be.defined;
      expect(KeyCode.ZERO).to.deep.equal(48);
    });

    it('should do what defined KeyCode.ONE', () => {
      expect(KeyCode.ONE).to.be.defined;
      expect(KeyCode.ONE).to.deep.equal(49);
    });

    it('should do what defined KeyCode.TWO', () => {
      expect(KeyCode.TWO).to.be.defined;
      expect(KeyCode.TWO).to.deep.equal(50);
    });

    it('should do what defined KeyCode.THREE', () => {
      expect(KeyCode.THREE).to.be.defined;
      expect(KeyCode.THREE).to.deep.equal(51);
    });

    it('should do what defined KeyCode.FOUR', () => {
      expect(KeyCode.FOUR).to.be.defined;
      expect(KeyCode.FOUR).to.deep.equal(52);
    });

    it('should do what defined KeyCode.FIVE', () => {
      expect(KeyCode.FIVE).to.be.defined;
      expect(KeyCode.FIVE).to.deep.equal(53);
    });

    it('should do what defined KeyCode.SIX', () => {
      expect(KeyCode.SIX).to.be.defined;
      expect(KeyCode.SIX).to.deep.equal(54);
    });

    it('should do what defined KeyCode.SEVEN', () => {
      expect(KeyCode.SEVEN).to.be.defined;
      expect(KeyCode.SEVEN).to.deep.equal(55);
    });

    it('should do what defined KeyCode.EIGHT', () => {
      expect(KeyCode.EIGHT).to.be.defined;
      expect(KeyCode.EIGHT).to.deep.equal(56);
    });

    it('should do what defined KeyCode.NINE', () => {
      expect(KeyCode.NINE).to.be.defined;
      expect(KeyCode.NINE).to.deep.equal(57);
    });
  });

  describe('keys code for numpad', () => {
    it('should do what defined KeyCode.NUMPAD_0', () => {
      expect(KeyCode.NUMPAD_0).to.be.defined;
      expect(KeyCode.NUMPAD_0).to.deep.equal(96);
    });

    it('should do what defined KeyCode.NUMPAD_1', () => {
      expect(KeyCode.NUMPAD_1).to.be.defined;
      expect(KeyCode.NUMPAD_1).to.deep.equal(97);
    });

    it('should do what defined KeyCode.NUMPAD_2', () => {
      expect(KeyCode.NUMPAD_2).to.be.defined;
      expect(KeyCode.NUMPAD_2).to.deep.equal(98);
    });

    it('should do what defined KeyCode.NUMPAD_3', () => {
      expect(KeyCode.NUMPAD_3).to.be.defined;
      expect(KeyCode.NUMPAD_3).to.deep.equal(99);
    });

    it('should do what defined KeyCode.NUMPAD_4', () => {
      expect(KeyCode.NUMPAD_4).to.be.defined;
      expect(KeyCode.NUMPAD_4).to.deep.equal(100);
    });

    it('should do what defined KeyCode.NUMPAD_5', () => {
      expect(KeyCode.NUMPAD_5).to.be.defined;
      expect(KeyCode.NUMPAD_5).to.deep.equal(101);
    });

    it('should do what defined KeyCode.NUMPAD_6', () => {
      expect(KeyCode.NUMPAD_6).to.be.defined;
      expect(KeyCode.NUMPAD_6).to.deep.equal(102);
    });

    it('should do what defined KeyCode.NUMPAD_7', () => {
      expect(KeyCode.NUMPAD_7).to.be.defined;
      expect(KeyCode.NUMPAD_7).to.deep.equal(103);
    });

    it('should do what defined KeyCode.NUMPAD_8', () => {
      expect(KeyCode.NUMPAD_8).to.be.defined;
      expect(KeyCode.NUMPAD_8).to.deep.equal(104);
    });

    it('should do what defined KeyCode.NUMPAD_9', () => {
      expect(KeyCode.NUMPAD_9).to.be.defined;
      expect(KeyCode.NUMPAD_9).to.deep.equal(105);
    });

    it('should do what defined KeyCode.NUMPAD_MULTIPLY', () => {
      expect(KeyCode.NUMPAD_MULTIPLY).to.be.defined;
      expect(KeyCode.NUMPAD_MULTIPLY).to.deep.equal(106);
    });

    it('should do what defined KeyCode.NUMPAD_ADD', () => {
      expect(KeyCode.NUMPAD_ADD).to.be.defined;
      expect(KeyCode.NUMPAD_ADD).to.deep.equal(107);
    });

    it('should do what defined KeyCode.NUMPAD_ENTER', () => {
      expect(KeyCode.NUMPAD_ENTER).to.be.defined;
      expect(KeyCode.NUMPAD_ENTER).to.deep.equal(108);
    });

    it('should do what defined KeyCode.NUMPAD_SUBTRACT', () => {
      expect(KeyCode.NUMPAD_SUBTRACT).to.be.defined;
      expect(KeyCode.NUMPAD_SUBTRACT).to.deep.equal(109);
    });

    it('should do what defined KeyCode.NUMPAD_DECIMAL', () => {
      expect(KeyCode.NUMPAD_DECIMAL).to.be.defined;
      expect(KeyCode.NUMPAD_DECIMAL).to.deep.equal(110);
    });

    it('should do what defined KeyCode.NUMPAD_DIVIDE', () => {
      expect(KeyCode.NUMPAD_DIVIDE).to.be.defined;
      expect(KeyCode.NUMPAD_DIVIDE).to.deep.equal(111);
    });
  });

  describe('keys code for Functions keys', () => {
    it('should do what defined KeyCode.F1', () => {
      expect(KeyCode.F1).to.be.defined;
      expect(KeyCode.F1).to.deep.equal(112);
    });

    it('should do what defined KeyCode.F2', () => {
      expect(KeyCode.F2).to.be.defined;
      expect(KeyCode.F2).to.deep.equal(113);
    });

    it('should do what defined KeyCode.F3', () => {
      expect(KeyCode.F3).to.be.defined;
      expect(KeyCode.F3).to.deep.equal(114);
    });

    it('should do what defined KeyCode.F4', () => {
      expect(KeyCode.F4).to.be.defined;
      expect(KeyCode.F4).to.deep.equal(115);
    });

    it('should do what defined KeyCode.F5', () => {
      expect(KeyCode.F5).to.be.defined;
      expect(KeyCode.F5).to.deep.equal(116);
    });

    it('should do what defined KeyCode.F6', () => {
      expect(KeyCode.F6).to.be.defined;
      expect(KeyCode.F6).to.deep.equal(117);
    });

    it('should do what defined KeyCode.F7', () => {
      expect(KeyCode.F7).to.be.defined;
      expect(KeyCode.F7).to.deep.equal(118);
    });

    it('should do what defined KeyCode.F8', () => {
      expect(KeyCode.F8).to.be.defined;
      expect(KeyCode.F8).to.deep.equal(119);
    });

    it('should do what defined KeyCode.F9', () => {
      expect(KeyCode.F9).to.be.defined;
      expect(KeyCode.F9).to.deep.equal(120);
    });

    it('should do what defined KeyCode.F10', () => {
      expect(KeyCode.F10).to.be.defined;
      expect(KeyCode.F10).to.deep.equal(121);
    });

    it('should do what defined KeyCode.F11', () => {
      expect(KeyCode.F11).to.be.defined;
      expect(KeyCode.F11).to.deep.equal(122);
    });

    it('should do what defined KeyCode.F12', () => {
      expect(KeyCode.F12).to.be.defined;
      expect(KeyCode.F12).to.deep.equal(123);
    });

    it('should do what defined KeyCode.F13', () => {
      expect(KeyCode.F13).to.be.defined;
      expect(KeyCode.F13).to.deep.equal(124);
    });

    it('should do what defined KeyCode.F14', () => {
      expect(KeyCode.F14).to.be.defined;
      expect(KeyCode.F14).to.deep.equal(125);
    });

    it('should do what defined KeyCode.F15', () => {
      expect(KeyCode.F15).to.be.defined;
      expect(KeyCode.F15).to.deep.equal(126);
    });
  });

  describe('keys code for Symbols', () => {
    it('should do what defined KeyCode.COLON', () => {
      expect(KeyCode.COLON).to.be.defined;
      expect(KeyCode.COLON).to.deep.equal(186);
    });

    it('should do what defined KeyCode.EQUALS', () => {
      expect(KeyCode.EQUALS).to.be.defined;
      expect(KeyCode.EQUALS).to.deep.equal(187);
    });

    it('should do what defined KeyCode.UNDERSCORE', () => {
      expect(KeyCode.UNDERSCORE).to.be.defined;
      expect(KeyCode.UNDERSCORE).to.deep.equal(189);
    });

    it('should do what defined KeyCode.QUESTION_MARK', () => {
      expect(KeyCode.QUESTION_MARK).to.be.defined;
      expect(KeyCode.QUESTION_MARK).to.deep.equal(191);
    });

    it('should do what defined KeyCode.TILDE', () => {
      expect(KeyCode.TILDE).to.be.defined;
      expect(KeyCode.TILDE).to.deep.equal(192);
    });

    it('should do what defined KeyCode.OPEN_BRACKET', () => {
      expect(KeyCode.OPEN_BRACKET).to.be.defined;
      expect(KeyCode.OPEN_BRACKET).to.deep.equal(219);
    });

    it('should do what defined KeyCode.BACKWARD_SLASH', () => {
      expect(KeyCode.BACKWARD_SLASH).to.be.defined;
      expect(KeyCode.BACKWARD_SLASH).to.deep.equal(220);
    });

    it('should do what defined KeyCode.CLOSED_BRACKET', () => {
      expect(KeyCode.CLOSED_BRACKET).to.be.defined;
      expect(KeyCode.CLOSED_BRACKET).to.deep.equal(221);
    });

    it('should do what defined KeyCode.QUOTES', () => {
      expect(KeyCode.QUOTES).to.be.defined;
      expect(KeyCode.QUOTES).to.deep.equal(222);
    });

    it('should do what defined KeyCode.LESS_THAN', () => {
      expect(KeyCode.LESS_THAN).to.be.defined;
      expect(KeyCode.LESS_THAN).to.deep.equal(188);
    });

    it('should do what defined KeyCode.GREATER_THAN', () => {
      expect(KeyCode.GREATER_THAN).to.be.defined;
      expect(KeyCode.GREATER_THAN).to.deep.equal(190);
    });
  });

  describe('keys code for others', () => {
    it('should do what defined KeyCode.BACKSPACE', () => {
      expect(KeyCode.BACKSPACE).to.be.defined;
      expect(KeyCode.BACKSPACE).to.deep.equal(8);
    });

    it('should do what defined KeyCode.TAB', () => {
      expect(KeyCode.TAB).to.be.defined;
      expect(KeyCode.TAB).to.deep.equal(9);
    });

    it('should do what defined KeyCode.CLEAR', () => {
      expect(KeyCode.CLEAR).to.be.defined;
      expect(KeyCode.CLEAR).to.deep.equal(12);
    });

    it('should do what defined KeyCode.ENTER', () => {
      expect(KeyCode.ENTER).to.be.defined;
      expect(KeyCode.ENTER).to.deep.equal(13);
    });

    it('should do what defined KeyCode.SHIFT', () => {
      expect(KeyCode.SHIFT).to.be.defined;
      expect(KeyCode.SHIFT).to.deep.equal(16);
    });

    it('should do what defined KeyCode.CONTROL', () => {
      expect(KeyCode.CONTROL).to.be.defined;
      expect(KeyCode.CONTROL).to.deep.equal(17);
    });

    it('should do what defined KeyCode.ALT', () => {
      expect(KeyCode.ALT).to.be.defined;
      expect(KeyCode.ALT).to.deep.equal(18);
    });

    it('should do what defined KeyCode.CAPS_LOCK', () => {
      expect(KeyCode.CAPS_LOCK).to.be.defined;
      expect(KeyCode.CAPS_LOCK).to.deep.equal(20);
    });

    it('should do what defined KeyCode.ESC', () => {
      expect(KeyCode.ESC).to.be.defined;
      expect(KeyCode.ESC).to.deep.equal(27);
    });

    it('should do what defined KeyCode.SPACEBAR', () => {
      expect(KeyCode.SPACEBAR).to.be.defined;
      expect(KeyCode.SPACEBAR).to.deep.equal(32);
    });

    it('should do what defined KeyCode.PAGE_UP', () => {
      expect(KeyCode.PAGE_UP).to.be.defined;
      expect(KeyCode.PAGE_UP).to.deep.equal(33);
    });

    it('should do what defined KeyCode.PAGE_DOWN', () => {
      expect(KeyCode.PAGE_DOWN).to.be.defined;
      expect(KeyCode.PAGE_DOWN).to.deep.equal(34);
    });

    it('should do what defined KeyCode.END', () => {
      expect(KeyCode.END).to.be.defined;
      expect(KeyCode.END).to.deep.equal(35);
    });

    it('should do what defined KeyCode.HOME', () => {
      expect(KeyCode.HOME).to.be.defined;
      expect(KeyCode.HOME).to.deep.equal(36);
    });

    it('should do what defined KeyCode.LEFT', () => {
      expect(KeyCode.LEFT).to.be.defined;
      expect(KeyCode.LEFT).to.deep.equal(37);
    });

    it('should do what defined KeyCode.UP', () => {
      expect(KeyCode.UP).to.be.defined;
      expect(KeyCode.UP).to.deep.equal(38);
    });

    it('should do what defined KeyCode.RIGHT', () => {
      expect(KeyCode.RIGHT).to.be.defined;
      expect(KeyCode.RIGHT).to.deep.equal(39);
    });

    it('should do what defined KeyCode.DOWN', () => {
      expect(KeyCode.DOWN).to.be.defined;
      expect(KeyCode.DOWN).to.deep.equal(40);
    });

    it('should do what defined KeyCode.INSERT', () => {
      expect(KeyCode.INSERT).to.be.defined;
      expect(KeyCode.INSERT).to.deep.equal(45);
    });

    it('should do what defined KeyCode.DELETE', () => {
      expect(KeyCode.DELETE).to.be.defined;
      expect(KeyCode.DELETE).to.deep.equal(46);
    });

    it('should do what defined KeyCode.HELP', () => {
      expect(KeyCode.HELP).to.be.defined;
      expect(KeyCode.HELP).to.deep.equal(47);
    });

    it('should do what defined KeyCode.NUM_LOCK', () => {
      expect(KeyCode.NUM_LOCK).to.be.defined;
      expect(KeyCode.NUM_LOCK).to.deep.equal(144);
    });
  });
});