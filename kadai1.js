var args = process.argv.slice(2);
var i = args.length;
for(const arg of args){
  console.log( i + '番目は' + arg + 'です');
  i--;
}