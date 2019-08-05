function repeat(operation, num) {
        operation(num);
        if(num > 0){
            repeat(operation, num - 1);
        }
  }
  module.exports = repeat