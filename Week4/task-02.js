//Instructions 
//Given an array of strings, words, return a string that has all the words concatenated together
// - spaces are needed in between words
//
//ex. ['how', 'are', 'you'] -> 'how are you'

function wordsToSentence(words) {
  let result = '';
  for(i=0;i<words.length;i++){
    result = result + words[i] + ' ';
  }
  return result.trim();
}

//console log results
console.log('results', wordsToSentence(['hey', 'there']));

//don't change this line
// module.exports = {wordsToSentence};
