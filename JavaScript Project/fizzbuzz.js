//Loop 0-100.
//If number % 3 - console.log "Fizz"
//If % 5 - console.log "Buzz"
//If % by both - console.log "Fizzbuzz"
//Otherwise- print a number

for(var i=1; i<100; i++) {
  if(i%3 == 0 && i%5 == 0) {
    console.log("Fizzbuzz");
  }else if(i%3 == 0) {
    console.log("Fizz");
  }else if(i%5 ==0) {
    console.log("Buzz");
  }else {
    console.log(i);
  }
}