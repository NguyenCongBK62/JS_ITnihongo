var arr = process.argv.slice(2).map(item => parseInt(item, 10));
arr = arr.sort();

console.log(Math.floor((arr[0]+arr[arr.length-1])/2));

