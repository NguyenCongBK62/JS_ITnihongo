const arr = [];
for (const arg of process.argv.slice(2)){
  arr.push(arg);
}

const start = [];
const end = [];

start.push(arr[0] + '-' +arr[1] + '-' + arr[2])
end.push(arr[3] + '-' + arr[4] + '-' + arr[5])

var diff =  Math.floor(( Date.parse(end) - Date.parse(start) ) / 86400000); 
console.log(diff);