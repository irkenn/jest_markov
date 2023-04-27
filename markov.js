/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/); //This is to break the string every space or return
    this.words = words.filter(c => c !== ""); //This is to eliminate space characters from the file
    this.words = words.map( e => e.toLowerCase());

    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let dict = {};
    for (let i=0; i < this.words.length; i++){
      // console.log(dict[this.words[i]]);
      let nextWord = this.words[i+1];
    
      if (dict[this.words[i]]){
        dict[this.words[i]].push(nextWord);
      }
      else{
        dict[this.words[i]] = [];
        dict[this.words[i]].push(this.words[i+1]);
      }
    }
    return this.chains = dict;
  }

  getRandomWordFromArray(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  /** return random text from chains */
  makeText(numWords = 100) {
    
    let outputText = [];
    let seed = this.getRandomWordFromArray(this.words);
    outputText.push(seed);

    for (let i=0; i < numWords; i++ ){
      let previousWord = outputText[i];
      if (this.chains[previousWord] === undefined){
        break;
      }
      else{
        let nextWord = this.getRandomWordFromArray(this.chains[previousWord]) || this.chains[previousWord];
        outputText.push(nextWord);    
      }
    }
    
    return outputText.join(' ');
  }
}

module.exports = { MarkovMachine }