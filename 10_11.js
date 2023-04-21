//! this keyword :----> 

//? 1...
 console.log(this);// window 

 function dmeo(){ 
    console.log(this);// window
 }
 dmeo();

//? 2...
'use strict';
console.log(this);// window

'use strict'; 
function demo(){
    console.log(this);// undefined
}
demo();






//! 'use strict' :----> 
'use strict'

a = 10;
console.log(a);

function demo(){
    a = 20;
    console.log(a);
    console.log('Hello SIr');
}
demo();
