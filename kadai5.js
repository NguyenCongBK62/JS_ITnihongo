var string = process.argv[2];
var arr1 = string.split('+', 2);
var arr2 = arr1[1].split('=', 2);
var num1 = arr1[0];
var num2 = arr2[0];
var result = arr2[1];

for(var i = 0; i < 10; i++){
  tar1 = parseInt(num1.replace(/x/g, i), 10);
  tar2 = parseInt(num2.replace(/x/g, i), 10);
  val = parseInt(result.replace(/x/g, i), 10);
  if(tar1 + tar2 === val){
    console.log(i);
    return;
  }
}

console.log('NA');