! Function :
* function is a block of code.

* there are different types :
* 1. named function / normal function / function declaration
* 2. anonymous function
* 3. function expression
* 4. arrow function
* 5. IIFE function 

    ? 1... Normal Function :--->
    * examples :----
        function sum(){
            var a = 20;
            var b = 30;
            console.log(a+b);
        }
        sum();

        ?... parameters & arguments in function :---
            function multi(a,b,c=20){
                console.log(a);
                console.log(b);
                console.log(c);
            }
            multi(1,4,7);

        ?... return keyword :---
            function dens(){
                sayHello = 'Hello';
                return sayHello; 
            }
            console.log(dens());

            function demo(a){
                var vals = a;
                return vals;
            }
            console.log(demo([1,2,3,4,5,6]));

            var ast = vals;
            console.log(ast);

    ? 2... Anonymous Function :-----> 
    * example :---
        let names = function(myname){
            console.log(myname);
        }
        names('Yash');

    ? 3... Function Expression :----->
    * example :---
        let add = function sum(a,b){
            console.log(a+b);
        }
        add(10,20);

        let adds = function(a,b){
            console.log(a+b);
        }
        adds(10,20);

    ? 4... Arrow Function :-----> 
    * example :---
        let myfun = () => { console.log('Hello'); }
        myfun();

        let yourname = () => {
        var a = 20;
        var b = 30;
        console.log(a+b); 
        }
        yourname();

        let ads = a => a; console.log(ads('Tarun'));

    ? 5... IIFE Function :------->  
    * syntax : ()() or (())
    * examples :---
        (function(){
            console.log('Hello');
        })();

        (function(fname,lname){
            console.log(fname + ' ' + lname);
        })("Tushar",'Sharma');

        (function(a){
            console.log('Gokul...');
            console.log(a);
        }('Barsana'));