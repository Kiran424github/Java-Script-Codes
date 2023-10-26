function reverseWordsInSentence(sentence) {
 const wordsAndWhitespace = sentence.split(/(\s+)/);
 const reversedWords = wordsAndWhitespace.map(item => {
 if (item.trim() === '') {
 return item; 
 } else {
 return item.split('').reverse().join('');
 }
 });
 const reversedSentence = reversedWords.join('');
 return reversedSentence;
}
const inputSentence = prompt("Please enter a word:");
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log("Reversed Sentence: " + reversedSentence);
