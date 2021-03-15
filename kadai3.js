var money = 1000 - parseInt(process.argv[2], 10);

var result = 0;

result = result + Math.floor(money/500);
money = money % 500;

if(money > 0){
  result = result + Math.floor(money/100);
  money = money % 100;
}

if(money > 0){
  result = result + Math.floor(money/50);
  money = money % 50;
}

if(money > 0){
  result = result + Math.floor(money/10);
  money = money % 10;
}

if(money > 0){
  result = result + Math.floor(money/5);
  money = money % 5;
}

if(money > 0){
  result = result + money;
}

console.log(result);