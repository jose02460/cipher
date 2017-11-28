var enteredSentence = prompt("Enter your sentence: ");
console.log(enteredSentence);


var pulledChar = function(enteredSentence) {
  var enteredSentence = enteredSentence.charAt(0) + enteredSentence.charAt(enteredSentence.length-1);
  console.log(firstLast);
}

var upperCased = function(pulledChar){
  return pulledChar.toUpperCase();
  console.log(upped);
}

var reverse = function(upped) {
  return upped.charAt(1) + upped.charAt(0);
  console.log(reversed);
}
pulledChar(enteredSentence);
upperCased(firstLast);
reverse(upped);
