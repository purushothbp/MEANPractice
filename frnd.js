// const input=[1,1,2,2,4,5]
// var i=0
// var n=input.length
// var output=[]
// for(i;i<n;i++){
//   if(input[i]!=input[i+1]){
//     output.push(input[i]);
//   }
// }
// console.log(output)




// const input2="hello from root"
// function reverseString(str){
//   console.log( str.split("").reverse().join(""))
// }
// reverseString(input2)



// var input3=[1,2,3,4,5]
// var output1=[]
// for(i=0;i<input3.length;i++){
//   if(i!=2 &&(input3[i]!=9 || input3[i]==9))
//   output1.push(input3)
// }
// console.log(output)
// input3.splice(2,0,9)
// console.log(input3)


// 1. Check if a number is odd or even in JavaScript

function isEvenOrOdd(number) {
  console.log((number/2==0)? `${number} is even`:`${number} is odd`)
}
isEvenOrOdd(15);

function isNumber(number) {
  console.log(isNaN(number) ? `${number} is a number` : `${number} is not a number `)

}
isNumber('sf')

function findLargest(a, b) {
  if (a > b) {
    console.log("num1 is largest");
  } else if (a == b) {
    console.log("num1 and num2 are equal");
  } else {
    console.log("num2 is largest");
  }
}
findLargest(12, 15);

// 4. Find the largest of three number

function findLargestOf3(a, b, c) {
  if (a > b && a > c) {
    console.log("num1 is largest");
  } else if (b > c) {
    console.log("num2 is largest");
  } else {
    console.log("num3 is largest");
  }
}
findLargestOf3(12, 10, 20);

function findTriangleType(a, b, c) {
  if (a == b && b == c && a == c) {
    console.log("Equilateral triangle");
  } else if (a == b || b == c || a == c) {
    console.log("Isosceles triangle");
  } else {
    console.log("Scalene triangle");
  }
}
findTriangleType(12, 12, 30);


function checkInRange(start, end, range) {
  console.log((range >= start && range <= end) ? `${range} is in range` : `${range} is not in range`)
}
checkInRange(12, 20, 14);