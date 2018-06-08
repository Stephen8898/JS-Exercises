
console.log("my first application");
console.log("Hello Node");

//       function evenNum(){
//         for(var i = 0; i <= 1000; i+=2){
//             console.log(i);
//         } 
// }
// evenNum();

    function stringDecending(n){
        
        for(var i = n;  i--; ){
            var ast = ""
            for( var j=i; j--; )
                ast +="*";
            
            console.log(ast);
        }
    }
    stringDecending(10);

  var a =  require('./module.js');
console.log(a.foo);
   
var mod = require('./module.js');
console.log(mod);
mod.prime;
