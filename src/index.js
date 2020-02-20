
exports.min = function min (array) {
  if(array === undefined || array.length === 0)
  return 0;
  let min = Infinity;
  for(let i in array){
    if (array[i]<=min){
    min = array[i]
    }
  }
  return min;  
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0)
  return 0;
  let min = -Infinity;
  for(let i in array){
    if (array[i]>=min){
    min = array[i]
    }
  }
  return min;  
}

exports.avg = function avg (array) {
  let avg = 0;
  if(array === undefined || array.length === 0)
  return 0;
  for(let i in array){
    avg+=array[i];
  }
  return avg/array.length;
}
