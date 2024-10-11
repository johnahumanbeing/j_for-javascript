// a word blank is a sentence with missing words and you have to fill in the missing words
// the sentence is "The [adjective] [noun] [verb] to the store"

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb)
{
  var result = "";

  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
  return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));