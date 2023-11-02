const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    const yes = new Word("yes");

    it('should have a "word" property', function () {
      expect(yes).to.have.property('word').that.is.equal('yes');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(yes.word).to.equal('yes');
    });
  });

  describe("removeVowels function", function () {
    const yes = new Word("yes");
    const result = yes.removeVowels();

    it("should return a the word with all vowels removed", function () {
      expect(result).to.equal('ys');
    });
  });

  describe("removeConsonants function", function () {
    const example = new Word("example");
    const result = example.removeConsonants();

    it("should return the word with the consonants removed", function () {
      expect(result).to.equal("eae");
    });
  });

  describe("pigLatin function", function () {
    const example = new Word("example");
    const result = example.pigLatin();
    it("should return the word converted to pig latin", function () {
      expect(result).to.equal('exampleyay');
    });
  });
});
