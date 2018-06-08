exports.foo = "bar"; 

console.log("Hello Class");

function hello(){
    return "Hello World!";
}
function cent(){
    for(var i =0; i<= 100; i++){
        console.log(i);
    }
}

function prime(){
    for(var i = 3; i < 100; i++){
      if(isPrime(i)){
        console.log(i);
      }
    }
}

function isPrime(a){
    for(var i = 2; i *i <= a; i++){
        if(a % i==0){
            return false;
        }
    }return true;
}

prime();
module.exports.hello = hello;
module.exports.prime = prime;