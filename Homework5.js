/*#1
function oddOrNot(number) {
    const lastNumber = number % 10;
    if (number === 0) {
        return true
    } else
    if (lastNumber % 2 === 0) {
        return false
    } else {
        return oddOrNot(Math.floor(number / 10))
    }
}
console.log(oddOrNot(4211133));
console.log(oddOrNot(7791));
console.log(oddOrNot(5));*/
/*#2
let arr1 = [56, -9, 87, -23, 0, -105, 55, 1];
let arr2 = [45, -9, 15, 5, -78];
let arr3 = [-5, -9, -111, -1000, -7];
function minPositiveElem(arr,i = 0, currentMin = Number.MAX_SAFE_INTEGER){
    if(i === arr.length - 1){
        if(currentMin !== Number.MAX_SAFE_INTEGER) {
            return currentMin;
        }
        return -1;
    } else if(arr[i] >= 0 && arr[i] <= currentMin){
        currentMin = arr[i];
    }
    return minPositiveElem(arr,i + 1, currentMin);
}
console.log(minPositiveElem(arr1));
console.log(minPositiveElem(arr2));
console.log(minPositiveElem(arr3));*/
/*#3
let arr1 = [2, 12, 15, 48, 64];
let arr2 = [-9, -4, -4, 3, 12, 4, 5];
function sortedArr(arr,i = 0){
    if(i === arr.length - 1){
        return -1;
    }else if (arr[i] < arr[i - 1]){
        return i;
    }else return sortedArr(arr,i + 1);
}
console.log(sortedArr(arr1));
console.log(sortedArr(arr2));*/
/*#4
let arr1 = [6, 78, "n", 0, 1];
let arr2 = [5];
let arr3 = [];
function delFirstElem(arr, newArr = [], i = 0){
    if (arr.length === 0 || newArr.length === arr.length - 1){
        return newArr;
    }
    else if (i === 0){
        return delFirstElem(arr,newArr,i + 1);
    }else {
        newArr.push(arr[i]);
        return delFirstElem(arr,newArr,i + 1);
    }
}
console.log(delFirstElem(arr1));
console.log(delFirstElem(arr2));
console.log(delFirstElem(arr3));*/
/*
#5
let arr1 = [1, [3, 4, [1, 2]], 10];
let arr2 = [14, [1, [[[3, []]], 1], 0]];
function concat(arr1, ind){
    let newArr = [];
    for (let i = 0;i < arr1.length;i++){
        if(ind === i)
        {
            for (let j = 0;j < arr1[ind].length;j++){
                newArr.push(arr1[ind][j]);
            }
            continue;
        }
        newArr.push(arr1[i]);
    }
    return newArr;
}

function nestedArrays(arr){
    for (let i = 0;i < arr.length;i++) {
        if (typeof arr[i] === "object"){
            let newArr = concat(arr,i);
            return nestedArrays(newArr);
        }
    }
    return arr;
}
console.log(nestedArrays(arr1));
console.log(nestedArrays(arr2));
*/
/*#6
let arr1 = ["a", "b", "c", "d", "e", "f", "g", "h"];
let arr2 = ["a", "b", "c", "d", "e", "f", "g", "h"];
function rotatedArr(arr,n,newArr = [], bool = false){
    if (n === 0){
        if (newArr === []){
            return arr;
        }
        if (bool) {
            return arr.concat(newArr);
        }else {
            return newArr.concat(arr);
        }
    }
    if (n > 0){
        newArr.push(arr.shift());
        bool = true;
        return rotatedArr(arr,--n,newArr, bool);
    }else if (n < 0){
        newArr.unshift(arr.pop());
        bool = false;
        return rotatedArr(arr,++n,newArr, bool);
    }
}

console.log(rotatedArr(arr1,3));
console.log(rotatedArr(arr2,-2));*/
/*#7
function sumOfNumDigits(n) {
    if (n >= 0 && n < 10){
        return n;
    }
    let sum = 0;
    while(n > 0){
        let lastNum = n % 10;
        sum += lastNum;
        n = Math.floor(n / 10)
    }return sumOfNumDigits(sum);
}



console.log(sumOfNumDigits(14));
console.log(sumOfNumDigits(29));
console.log(sumOfNumDigits(999999999999));
*/


