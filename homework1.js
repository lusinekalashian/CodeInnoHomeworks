/*
#1
function oddOrEven(num){
    if(num % 2 === 0){
        return "even";
    }return "odd";
}
console.log(oddOrEven(123));
console.log(oddOrEven(35));
console.log(oddOrEven(70));*/
/*
#2
function isDivisible(x, y){
    if (x % y ===0 || y % x === 0) return 1;
    return 0;
}
console.log(isDivisible(3,14));
console.log(isDivisible(18,2));
console.log(isDivisible(7,21));
*/
/*#3
function angleOfTriangle(alpha,betta){
    let gamma = 180-(alpha + betta);
    return gamma;
}
console.log("Gamma = " + angleOfTriangle(45,90));
console.log("Gamma = " + angleOfTriangle(30,30));
console.log("Gamma = " + angleOfTriangle(75,25));*/
/*
#4
function idk(n){
    if (n > 0){
        let strN = "" + n;
        let nn = "" + n + n;
        let nnn = "" + n + n + n;
        return +strN + +nn + +nnn;
    }return "Please input positive integer";
}
console.log(idk(3));
console.log(idk(17));
console.log(idk(100));
console.log(idk(-100));
*/
/*#5

function floatNum(n){
    if (n > 0){
        let lastNum = n % 10;
        if (lastNum === 0){
            return n
        }else {
            let str = n.toString();
            let arr = str.split("");
            arr.splice(str.length - 1, 1);
            return +(lastNum + arr.join(""));
        }
    }return "Please input positive integer";
}
console.log(floatNum(367));
console.log(floatNum(1002));
console.log(floatNum(250));
console.log(floatNum(8));*/
/*
#6
function averageOfTheNumber(x, y, z, n, m){
    return (x + y + z + n + m) / 5;

}
console.log(averageOfTheNumber(45, -12, 0, 3, -15));
console.log(averageOfTheNumber(7, 52, -23, 9, -81));
*/
/*#7
function multiple(n){
    if (n % 3 === 0 && n % 5 === 0 && n % 7 === 0) {
        return n + " is multiple of 3,5 and 7";
    }else if (n % 3 === 0 && n % 5 === 0){
        return n + " is multiple of 3 and 5";
    }else if (n % 5 === 0 && n % 7 === 0){
        return n + " is multiple of 5 and 7";
    }else if (n % 3 === 0 && n % 7 === 0){
        return n + " is multiple of 3 and 7";
    }else if (n % 3 === 0){
        return n + " is multiple of 3";
    }else if (n % 5 === 0){
        return n + " is multiple of 5";
    }else if (n % 7 === 0){
        return n + " is multiple of 7";
    }else return n + " is not a multiple of 3, 5 and 7.";

}
console.log(multiple(21));
console.log(multiple(35));
console.log(multiple(13));
console.log(multiple(420));
console.log(multiple(24));*/
/*#7
function multiple(n){
    const numbers = [3, 5, 7];
    const multiples = [];
    numbers.forEach(value => {
        if (n % value === 0) {
            multiples.push(value)
        }
    })
    if (multiples.length === 0) {
        return n + " is not a multiple of " + numbers.join(',') + ".";
    } else {
        return n + " is multiple of " + multiples.join(',') + ".";
    }
}
console.log(multiple(21));
console.log(multiple(35));
console.log(multiple(13));
console.log(multiple(420));
console.log(multiple(24));*/
/*#8
function decideAge(age,type){
    if (type === "months"){
        return "baby";
    }else if (type === "years"){
        if (age > 0) {
            if (age === 1 || age === 2) return "toddler";
            else if (age >= 3 && age <= 12) return "child";
            else if (age >= 13 && age <= 17) return "teenager";
            else return "adult";
        }else return "Please enter positive number";
    }
}
console.log(decideAge(8,"months"));
console.log(decideAge(45,"years"));
console.log(decideAge(3,"years"));*/
/*
#9
const arr1 = [45,26,78];
const arr2 = [-23,-456,0];
function sortedNumbers(arr){
    function sortNumber(a,b){
        return a - b;
    }
    return arr.sort(sortNumber);
}
console.log(sortedNumbers(arr1));
console.log(sortedNumbers(arr2));
*/
/*#10
function examsResult(points){
    const passedPoints = [...points];
    let isPassed = true;

    points.forEach(point => {
        if(point < 40) {
            isPassed = false;
            passedPoints.splice(points.indexOf(point),1)
        }
    })

    const sum = passedPoints.reduce(( sum, el) => sum + el, 0);

    if (isPassed || (!isPassed && sum / passedPoints.length > 50) ) {
        return "Passed";
    } else {
        return "Not passed";
    }
}
const points = [65, 70, 60];
const points1 = [10, 85, 75];
const points2 = [35, 25, 40];
const points3 = [20, 40, 40];

console.log(examsResult(points));
console.log(examsResult(points1));
console.log(examsResult(points2));
console.log(examsResult(points3));*/
/*#11
function signOfProduct(x, y, z){
    if (x === 0 || y === 0 || z === 0){
        return "unsigned"
    }else if ((x > 0 && y > 0 && z > 0) || (x < 0 && y < 0 && z > 0 ) || (x < 0 && y > 0 && z < 0 ) || (x > 0 && y < 0 && z < 0 )){
        return "+";
    }else if(x < 0 && y < 0 && z <0){
        return "_";
    }else if (x < 0 || y < 0 || z < 0){
        return "-";
    }return "unsigned";
}
console.log(signOfProduct(-14,5,0));
console.log(signOfProduct(-8,9,-6));
console.log(signOfProduct(4,19,-2));*/
/*#12
function quadraticEquation(a,b,c){
    if (a !== 0 && b !== 0 && c !== 0) {
        let D = Math.pow(b, 2) - 4 * a * c;
        if (D > 0) {
            return "solutions are " + ((-b + Math.sqrt(D)) / (2 * a)) + " and " + ((-b - Math.sqrt(D)) / (2 * a));
        } else if (D === 0) {
            return "solution is " + (-b / (2 * a));
        } else return "Solution does not exist ";
    }else return "Enter valid constants";

}
console.log(quadraticEquation(1,2,1));
console.log(quadraticEquation(0,4,-5));
console.log(quadraticEquation(3,-8,12));
console.log(quadraticEquation(5,-13,6));*/
/*#13
var n = + prompt();
var i = 0;
var j = 0;
if (n % 2 === 0 && !Math.floor(n /10)){
        i+= 1;
}
if (n% 3 === 0 && n % 10 === 1){
        j += 1;
}*/
/*#14
function includesOrNot(x,y){
    x = x.toString();
    y = y.toString();
    y = y.split("");
    if (y.includes(x)){
        return "Yes";
    }else return "No";

}
console.log(includesOrNot(5,2463));
console.log(includesOrNot(4,6));
console.log(includesOrNot(8,45689));*/
/*#15
function reverseNumber(x){
    let str = x.toString();
    let arr = str.split("");
    let lastNum = arr.splice(arr.length-1, 1);
    let firstNum = arr.shift();
    arr.push(firstNum);
    return lastNum + arr.join("");

}
console.log(reverseNumber(2));
console.log(reverseNumber(13));
console.log(reverseNumber(895796));*/

/*
#17
function area(figureType,x,y){
    if(x > 0 && y > 0){
        if(figureType === "triangle"){
            return "Square of the triangle is " + (x * y)/2;
        }else if(figureType = "rectangle"){
            return "Square of the rectangle is " + x * y;
        }return "please choose between rectangle or triangle ";
    }return "Please enter only positives";
}
console.log(area("triangle",6,7));
console.log(area("rectangle",8,5));
console.log(area("triangle",0,5));
*/
/*
#18
function differenceBetweenDigits(x){
    let str = x.toString();
    let arr = str.split("");
    let maxDigit = Number(arr[0]);
    let minDigit = Number(arr[0]);

    for (let i = 1; i < arr.length; i++){
        const number = Number(arr[i]);
        if (number > maxDigit) maxDigit = number;
        if (number < minDigit) minDigit = number;
    }
    return maxDigit - minDigit;
}
console.log(differenceBetweenDigits(5));
console.log(differenceBetweenDigits(152));
console.log(differenceBetweenDigits(4593653));
*/
