const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(phrase, key) {
    if (!phrase || !key) {
      throw new Error("Incorrect arguments!");
    }
    let encoded = "";
    let cypherKey = key.toUpperCase();
    let cypherIterator = 0;
    for (let i = 0; i < phrase.length; i++) {
      const currentCode = phrase.toUpperCase().charCodeAt(i);
      if (currentCode >= 65 && currentCode <= 90) {
        if (!cypherKey[cypherIterator]) {
          cypherKey += cypherKey;
        }
        const cypherChar = cypherKey.charCodeAt(cypherIterator);
        const cypherAddition = cypherChar - 65;
        let encodedCharcode = currentCode + cypherAddition;
        if (encodedCharcode > 90) {
          encodedCharcode = encodedCharcode - 26;
        }
        encoded += String.fromCharCode(encodedCharcode);
        cypherIterator++;
      } else {
        encoded += phrase[i];
      }
    }

    return this.isDirect ? encoded : encoded.split("").reverse().join("");
  }
  decrypt(phrase, key) {
    if (!phrase || !key) {
      throw new Error("Incorrect arguments!");
    }
    let encoded = "";
    let cypherKey = key.toUpperCase();
    let cypherIterator = 0;
    for (let i = 0; i < phrase.length; i++) {
      const currentCode = phrase.toUpperCase().charCodeAt(i);
      if (currentCode >= 65 && currentCode <= 90) {
        if (!cypherKey[cypherIterator]) {
          cypherKey += cypherKey;
        }
        const cypherChar = cypherKey.charCodeAt(cypherIterator);
        const cypherAddition = cypherChar - 65;
        let encodedCharcode = currentCode - cypherAddition;
        if (encodedCharcode < 65) {
          encodedCharcode = encodedCharcode + 26;
        }
        encoded += String.fromCharCode(encodedCharcode);
        cypherIterator++;
      } else {
        encoded += phrase[i];
      }
    }

    return this.isDirect ? encoded : encoded.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
