/*
#1
let arr = [2, 5, 7];

function forEach(arr, callback) {
    for (let i = 0; i< arr.length; i++) {
         callback(arr[i]);
    }
}
arr.forEach(val => {
    console.log(val)
})
*/
/*#2
let arr = [2, 5, 7];
function map(arr, callback) {
    let newArr = [];
    for (let i = 0; i< arr.length; i++) {
        let newData = callback(arr[i]);
        newArr.push(newData);
    }
    return newArr;
}
const newArr = map(arr,val => {
    return val *= 2;
});

console.log(newArr);*/
/*
#3
let arr = [2, 5, 7];
function filter(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
            if (callback(arr[i])){
            newArr.push(callback(arr[i]));
        }
    }
    return newArr;
}
const newArr = filter(arr,val => {
    return val;
});
console.log(newArr);
*/
/*#4
let arr = [2, 5, 7];
function every(arr, callback) {
    let response = true;
    for (let i = 0; i < arr.length; i++) {
        const condition = callback(arr[i]);
        if (!condition) {
            response = false
        }
    }
    return response;
}

console.log(every(arr,val => {
    return val >= 5;
}));*/
/*
#5
let arr = [2, 5, 7];
function some(arr, callback) {
    let response = false;
    for (let i = 0; i < arr.length; i++) {
        const condition = callback(arr[i]);
        if (!condition) {
            return true;
        }
    }
    return response;
}

console.log(some(arr,val => {
    return val >= 5;
}));
*/
/*#6
let arr = [2, 5, 7];
function every(arr, callback) {
    let response = true;
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
        if (callback(arr[i])) {
            return callback(arr[i]);
        }return undefined;
    }

}

console.log(every(arr,val => {
    return val = 5;
}));*/
/*#8
let arr = [20, 68, 5, 42, 68, 46, 40];
function indexOf(arr,x, s){
    if (s === undefined){
    for (let i = 0; i < arr.length; i++){
        if (x === arr[i]){
            return i;
        }
    }
}else for (let i = s; i < arr.length; i++){
        if (x === arr[i]){
            return i;
        }
    }
}
console.log(indexOf(arr,68,2));*/
/*
#9
let arr = [20, 68, 5, 42, 58, 46, 40];
function pop(arr){
    arr.length = arr.length - 1;
    return arr;
}
console.log(pop(arr));*/
/*#11
let arr = [20, 68, 5, 42, 58, 46, 40];
function splice(arr,start, deleteCount, item){

    if (item !== undefined){
            for (let i = start; i < start + deleteCount - 1; i++){
                arr[i] = item;
            }
        }else {
        for (let i = start; i < start + deleteCount - 1;i++ ) {

        }
    }
    return arr;


}
console.log(splice(arr,3,3,20));*/
/*
#12
function join(){
    let arr = [20,40,65,75];
    let str = "";
    for (let i = 0;i < arr.length; i++){
        if (typeof arr[i] === "string"){
            str += arr[i];
        }else {
            arr[i].toString();
            str +=arr[i];
        }
    }
    return str;
}
console.log(join());*/
/*#13
function slice(start, end) {
    let arr = [20, 68, 5, 42, 58];
    let newArr = [];
    if (start === undefined && end === undefined) {
        newArr.push(arr);
    } else if (start !== undefined && end === undefined) {
        for (let i = start; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
    } else if (start !== undefined && end !== undefined) {
        for (let i = start; i < end; i++) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(slice(2,4));*/
/*
#14
function fill(value,start,end){
    let arr = [20,68,5,42,58];
    if (start !== undefined && end !== undefined){
        for (let i = start;i <= end; i++){
            arr[i] = value;
        }
    }else{
        for (let i = 0;i < arr.length;i++){
            arr[i] = value;
        }
    }
    return arr;
}
console.log(fill(30,1,2));
*/


