module.exports = function countWords(inputWords) {
   return inputWords.reduce((wordsCount, word) => {
        wordsCount[word] = (wordsCount[word] || 0) + 1; // inicializar el conteo de una palabre, encuentre un palabra nueva pone el conteo en cero 
        return wordsCount;
    }, {})
  }
