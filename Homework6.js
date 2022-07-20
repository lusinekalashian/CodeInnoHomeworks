/* #1
const x = [2,3,6,8,5,4,3];
const y = [6];
const z = [8,2,45,0];
function maxProduct(arr){
    if (arr.length === 1){
        return arr[0];
    }else {
        let currentMaxProduct = arr[0] * arr[1];

        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i] * arr[i + 1] > currentMaxProduct) {
                currentMaxProduct = arr[i] * arr[i + 1];
            }
        }
        return currentMaxProduct;
    }
}
console.log(maxProduct(x));
console.log(maxProduct(y));
console.log(maxProduct(z));*/
/* #2
const arr1 = [4,2,6,8,9,11,1];
const arr2 = [2,6,7,8,9,4];
function arrSequence(arr){
    let maxElem = arr[0];
    let minElem = arr[0];
    for (let i = 0; i < arr.length;i++){
        if (arr[i] > maxElem){
            maxElem = arr[i];
        }else if (arr[i] < minElem){
            minElem = arr[i];
        }
    }
    const differenceMaxMin = maxElem - minElem;
    const countOfMissed = differenceMaxMin - arr.length + 1;
    return countOfMissed;

}
console.log(arrSequence(arr1));
console.log(arrSequence(arr2));*/
/* #3
const str1 = "Prison of War";         //"POW"
const str2 = "Have a good night"      //"HAGN"
function convertLongPhrase(longPhrase){
    let acronym = "";
    for (let i = 0;i < longPhrase.length;i++){
        if (i === 0){
            acronym = "" + longPhrase[i];
        }else if (longPhrase[i] === " "){
            acronym += "" + longPhrase[i + 1].toUpperCase();
        }
    }
    return acronym;

}
console.log(convertLongPhrase(str1));
console.log(convertLongPhrase(str2));*/
/*#4
let str1 = "495215";
let str2 = "abcdfghz";
function substringsOfStr(str,n){
    for (let i = 0; i <= str.length - n; i++) {
        console.log(str.slice(i,i + n));
    }

}
substringsOfStr(str1,3);
substringsOfStr(str2,7);*/
/*#5
const str1 = "another";
const str2 = "quick";

function scoreOfWord(word){
    let sum = 0;
    const aeioulnrst = /[a, e, i, o, u, l, n, r, s, t]/g;
    const dg = /[dg]/g;
    const bcmp = /[b, c, m, p]/g;
    const fhvwy = /[f, h, v, w, y]/g;
    const k = /[k]/g;
    const jx = /[j, x]/g;
    const qz = /[q, z]/g;
    for (let i = 0;i < word.length;i++){
        if (word[i].match(aeioulnrst)){
            sum += 1;
        }
        if (word[i].match(dg)){
            sum += 2;
        }
        if (word[i].match(bcmp)){
            sum += 3;
        }
        if(word[i].match(fhvwy)){
            sum += 4;
        }
        if(word[i].match(k)){
            sum += 5;
        }
        if(word[i].match(jx)){
            sum += 6;
        }
        if(word[i].match(qz)){
            sum += 7;
        }
    }

    return sum;
}
console.log(scoreOfWord(str1));
console.log(scoreOfWord(str2));*/
/*#6
const str1 = "If man was meant to stay on the ground, god would have given us roots"
function squareCode(plain) {
    let res = [];
    let txtoutspace = plain.replace(/[, ]+/g, " ");
    txtoutspace = txtoutspace.replace(/\s/g, '');

    let n = Math.ceil(Math.sqrt(txtoutspace.length));
    let m = Math.ceil(txtoutspace.length / n);

    let start = 0;
    let end = m + 1;
    for (let i = 0; i < n;i++){
        console.log(txtoutspace.substring(start, end));
        start = end;
        end += m + 1;
    }
}
squareCode(str1);*/
/*#7
const str1 = "abcdefghijklmnopqrstuvwxyz";  //"nopqrstuvwxyzabcdefghijklm"
function caesarCipher(plain){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let res = [];
    for (let i = 0;i < plain.length;i++){
        for (let j = 0;j < alphabet.length;j++) {
            if (plain[i] === alphabet[j] && j < 13) {
                res.push(alphabet[j + 13]);
            }else if (plain[i] === alphabet[j] && j >= 13){
                res.push(alphabet[j - 13]);
            }
        }
    }
    return res.join("");
}
console.log(caesarCipher(str1));*/
