/*#1
const arr1 = [-98, 23, 0, -456, 12, 8];
const arr2 = [-60, 2, 43, -18, 5, -19, 36, 7, 56 ];
function arrays(arr){
    let max = arr[0];
    let secondMax = Number.MIN_VALUE;
    for(let i = 0; i < arr.length;i++){
        if (arr[i] >= max)
        {
            max = arr[i];
        }
    }

    let secondMaxInd = -1;
    for (let i = 0; i < arr.length;i++){
        if (arr[i] > secondMax && arr[i] < max){
            secondMax = arr[i];
            secondMaxInd = i;
        }
    }

    return secondMaxInd;
}

console.log(arrays(arr1));
console.log(arrays(arr2));*/
/*#2
let  arr1 = [1, 2, 3, 4];
let arr2 = [1];
function modifyArr(arr,padAmount,repeat){
    if (padAmount <= arr.length) {
        let arrTop = [];
        let arrBack = [];
        let newArr = [];
        for (let i = 0; i < repeat; i++) {
            for (let j = 0; j < padAmount; j++) {
                arrTop.push(arr[j]);
                arrBack.unshift(arr[arr.length - j - 1]);
            }
        }
        newArr = arrTop.concat(arr);
        return newArr.concat(arrBack);
    }else return "Invalid padding amount";
}
console.log(modifyArr(arr1,1,3));
console.log(modifyArr(arr1,2,1));
console.log(modifyArr(arr2,1,3));
console.log(modifyArr(arr2,2,3));*/
/*#3
let pass1 = "12asdf";
let pass2 = "Aaza1234566#";
function checkPassIsValid(pass){
    const upperCase = /[A-Z]/g;
    const lowerCase = /[a-z]/g;
    const num = /[0-9]/g;
    const charecter = /["$", "#", "@"]/g;
    if(pass.match(upperCase) && pass.match(lowerCase) && pass.match(num) && pass.match(charecter)) {
        return "Valid";
    }return "Invalid";
}
console.log(checkPassIsValid(pass1));
console.log(checkPassIsValid(pass2));*/
/*
#4
function no(n) {
    let arr = [];
    let x = 2 * n - 1;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if(!arr[i]) {
                arr[i] = [];
            }
            if (i === j || j === x - i - 1) {
                arr[i][j] = "x";
            }

            else arr[i][j] = "";
        }
    }
    return arr;

}
console.log(no(4));*/
/*
#5
let str1 = "Somewhere over the rainbow";
let str2 = "javascript";
let str3 = "  46778 + !";
function strToArr(str){
    let arr = str.split(" ");
    return arr;
}
console.log(strToArr(str1));
console.log(strToArr(str2));
console.log(strToArr(str3));*/
/*#7
function numbers(n) {
    let str1 = "";
    for (let i = 1; i < n; i++) {

        for (let j = 1; j <= i; j++) {
            str1 += j;
        }
        str1 += "\n";
    }
    console.log(str1);
    let str2 = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i + 1; j++) {
            str2 += j;
        }
        str2 += "\n";
    }
    console.log(str2);

}
numbers(5);*/
/*#8
function resOfArray(arr){
    let obj = {};
    let counter1 = 0;
    let counter2 = 0;

    for (let i = 0;i < arr.length;i++){
        if (typeof arr[i] === "number"){
            counter1++;
        }else if (typeof arr[i] === "string"){
            counter2++;
        }
    }
    obj = {
        Numbers:counter1,
        Strings:counter2
    }
    return obj;
}
const arr1 = [1, "10", "hi", 2, 3];
const arr2 = [1, 4, "i am a string", "456"];
console.log(resOfArray(arr1));
console.log(resOfArray(arr2));*/


