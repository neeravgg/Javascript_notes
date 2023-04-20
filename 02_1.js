! Data Types :---> 
* Data Types is Define the which type of value store in this variable.
* There are two type of Data Types :
* 1. Primitive Data Types 
* 2. Non-Primitive Data Types 

    ? 1... Primtive Data Types :--->
    * there are 'pre-defined' data types.
    * there are different types :
        ? 1. number
        ? 2. boolean
        ? 3. string
        ? 4. undefined
        ? 5. null 

            ! 1... number :---> 
                var a = 10;
                console.log(a);// 10
                console.log(typeof a);//  number
                ? Note: 'typeof() operator' , is define the type of value/data.

            ! 2... boolean :---> "return two values : 'true' & 'false'"
                var a = true;
                console.log(a);// true
                console.log(typeof a);// boolean

            ! 3... string :---> string in written "double quotes" & 'single quotes'.
                var a = 'Hello Sir';
                console.log(a);// Hello Sir
                console.log(typeof a);// string
                
                var a = "Dear Sir";
                console.log(a);// Dear Sir
                console.log(typeof a);// string

            ! 4... undefined :--->
                var und;
                console.log(und);// undefined
                console.log(typeof und);// undefined

                var und = undefined;
                console.log(und);// undefined
                console.log(typeof und);// undefined

            ! 5... null :----> 
                var nlt = null;
                console.log(nlt);// null
                console.log(typeof nlt);// object


    ? 2... Non-Primitive Data Types  :---> 
    * there are 'reference' data types.
    * there are different types :
        ? 1. array
        ? 2. object
        ? 3. function

            ! 1... array : 
            * array is a collection of multiple data or multiple data types. just like : const arrName = [10, 'string', true, null, undefined];
            * array is orderd list.
                const arr = [3,4];
                console.log(arr);

                const arr1 = ['shivam','golu','molu'];
                console.log(arr1);

                const arr2 = [true, 'hello', 20, null ,undefined];
                console.log(arr2);
                console.log(arr2[2]);
                console.log(typeof (arr2));

            ! 2... object :
            * object is a collection of key : value pair.
            * this is unorderd list.
            * syntax : const objName = {
            *          key : value, 
            *          ... 
            *          }

                const obj = {
                    names:"Tushar",
                    age:26,
                    address:'GuruGram'
                }
                console.log(obj);

            ! 3... function : 
            * function is block of code. 

                function demo()// function declaration
                {
                    console.log('Hello World !');// code 
                };
                demo();// function invoking

                function demo(){
                    console.log('Hello Word !');
                };
                demo();

                function sayHi(fname,lname){
                    console.log(fname , lname);
                }
                sayHi(10,30);

                document.write('Hello DM');
                console.log('Hello DM');
                alert('Hello');
                confirm('Hello');
                prompt('Enter your name ?','...');

? Prectice ::----> 

    const a = parseInt(prompt('Enter first num ?'));
    const b = parseInt(prompt('Enter second num ?'));
    console.log(a + b);
    console.log(typeof a);
    console.log(typeof b);