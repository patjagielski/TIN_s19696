var sentence = 'Hello my name is Ash';
console.log(findLongestWord(sentence));
function findLongestWord(sentence){
    return sentence.split(' ')
                    .sort(function(a,b){ return a.length-b.length; })
                    .pop();
}