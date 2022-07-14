/*#1
const arr1 = [23,  -98, 0, -456, 12, 8];
//const arr2 = [-60, 2, 43, -18, 5, -19, 36, 7, 56 ];
let newArr = [];
function arrays(arr){
    newArr.push(arr.sort(function(a, b){return a-b}));
    console.log(arr);
    console.log(newArr);

}
console.log(arrays(arr1));
//console.log(arrays(arr2));*/
/*#8 done
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
/*#7

function num(n){
    //let lastNum
    while (n > 0){
        console.log(n);
        n = Math.floor(n / 10);
        return num(n);
    }


    //console.log(lastNum);


}
console.log(num(12345))*/
/*
#6
const arr1 = [1,1,2,2,3];
const arr2 = [4,4];
const arr3 = [1,2,3];
function frequencyOfNum(arr){
    let counter = 1;
    let j = 1;
    let res = {};
    for (let i = 0;i < arr.length; i++){
        if (arr[i] === arr[j]){
            counter++;
            j++;
            res[arr[i]] = counter / arr.length;
        }

    }
        return res;


}
console.log(frequencyOfNum(arr1));*/
/*
#5 done
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
/*
#4 done
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
