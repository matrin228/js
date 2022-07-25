// №1
function stringToArray(string){
    return string.split(' ');
  }
//№2
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}
//№3
var min = function(list){   
  return Math.min(...list);
}
var max = function(list){  
  return Math.max(...list);
}



//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  let circumference = (circle.radius * 2 * Math.PI)
  return circumference
}
//
function giveMeFive(obj){
  let a = [];
  for (let key in obj) {
    if (key.length === 5) a.push(key);
    if (obj[key].length === 5) a.push(obj[key]); 
  }
  return a;
}