var args = process.argv.slice(2);
var drinks = args.slice(3).map(item => parseInt(item, 10));
var foods = args.slice(0,3).map(item => parseInt(item, 10));
var min = 10000000000;
for(var i = 0; i<3; i++ ){
  for( var j = 0; j<2 ; j++){
    if ( (foods[i] + drinks[j]) < min){
      min = foods[i] + drinks[j];
    }
  }
}
min = min - 50;
console.log(min);