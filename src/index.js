exports.min = function min (array) {
  
    if(array ===  undefined  || array.length == 0) return 0;

    const arr = array.sort( (a, b) => a - b );
  
      return arr[0];
  
  
}

exports.max = function max (array) {

    if(array ===  undefined  || array.length == 0) return 0;
    

    const arr = array.sort( (a, b) => b - a );
  
      return arr[0];
}

exports.avg = function avg (array) {
   if(array ===  undefined  || array.length == 0) return 0;

const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //const arr = array.sort( (a, b) => b - a );
const arr = array.reduce(reducer)/array.length
    return arr;
}
