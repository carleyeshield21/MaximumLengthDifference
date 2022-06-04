// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

function mxdiflg(a1, a2) {
    arr = []
    for(i=0; i<=a1.length-1; i++){
        for(j=0; j<=a2.length-1; j++){
            diff = Math.abs(a1[i].length - a2[j].length)
            arr.push(diff)
        }
    }
 // We use this function to sort the integer elements of the array with two or more digits, then output the last integer element which is the highest number     
 arr.sort(function(a, b){return a-b});
 console.log(`The maximum length difference from any string in the two arrays is ${arr[arr.length-1]}`)
}
mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"])
console.log('=====')
mxdiflg(['LeslieHenderson','LaverneHanson','AlexanderKim','DustinWalker','WinstonPadilla','JohnDouglas','SandraParsons','DanaWebb','AnnaBlake','MarleneCollier'], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"])