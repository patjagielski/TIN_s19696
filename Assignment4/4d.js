var word = 'Banana';
sortLetters(word);

function sortLetters(){
    word = word.toLowerCase();
    word = word.split("");
    word.sort();
    word = word.join("");
    console.log(word);
}
