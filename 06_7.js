! HOISTING :----> 
* there are two types :
? 1. Variable Hoisting 
? 2. Function Hoisting 

    ? 1... Variable Hoisting :----->> 
        
        console.log(a);// ReferenceError: a is not defined
 
        * in case of 'var' :
            var a;
            console.log(a);// undefined

            console.log(a);// undefined
            var a;
            a = 10;

            console.log(a);// undefined
            {var a;}
            a = 10;

            console.log(a);// ReferenceError: a is not defined
            function demo(){
                var a;// function scope
            }
            demo();
            a = 10;

            console.log(a);// undefined
            var a;
            console.log(a);// undefined
            a = 20;
            console.log(a);// 20
            var a = 30;
            console.log(a);// 30

        * in case of 'let' : 
            console.log(a);// ReferenceError: Cannot access 'a' before initialization
            let a;
            a = 30;

            let a;
            console.log(a);// undefined
            a = 50;
            console.log(a);// 50

        * in case of 'const' :
            console.log(a);// ReferenceError: Cannot access 'a' before initialization
            const a = 40;
            console.log(a);

    ? 2... Function Hoisting :----->
    * function declaration (support hoisting)
    * anonymous function, function expresssion, arrow function, & IIFE function noe support function !.
    
        * normal function : 
            demo();
            function demo(){
                console.log('Hello');
            }

        * anonymous function & funciton expression : 
            demo();
            var demo = function(){
                console.log('Hello');
            }

        * arrow function : 
            demo();
            var demo = () => { console.log('Hello'); };





! Closure :------> 

    function outerfun(){
        let a = 30;
        console.log(a);

        function innnerfun(){
            let b = 40;
            console.log(a);
            console.log(b);
        }
        innnerfun();

        console.log(b);
    }
    outerfun();


    const a = 40;
    function one(){
        const a = 'Hello';
        console.log(a);

        function two(a,b){
            console.log(a);
            console.log(b);

            function three(x,y){
                console.log(x);
                console.log(y);
            }
            three(a,b);
        }
        two('Tushar',"Golu");

        console.log(a);
        console.log(b);
    }
    console.log(a);
    one();
    console.log(a);
    console.log(b);