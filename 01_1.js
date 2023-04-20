JavaScript :-->

JavaScript is a Synchronous Type Language.
JavaScript is a Interprater Language.
JavaScript is Client side & Server Side Language.



! Variables :-------------> 
Variables are container for storing data/ values.
variables are different types : 
? 1. var 
? 2. let 
? 3. const 

? 1... var keyword : 

    var a;// declaration of the variable 
        a = 20;// assignment of the variable
    var a = 30;// initialization of the variable

    * We can re-declare same name varibale in case of 'var'.
        var num;
        var num = 30;// re-declare same name variable 
        console.log(num);// 30

    * We can re-assign same name variable in case of 'var'.
        var num = 10;
            num = 90;// re-assign same name varible
        console.log(num);// 90

    * We can re-initialize same name variable in case of 'var'.
        var num = 89;
        var num = 78;// re-initialize same name variable
        console.log(num);// 78

    * We can declare variable without initalization/assignment.
        var nmt;
        console.log(nmt);// undefined

? 2... let keyword : 

    * We can't re-declare same name variable in case of 'let'.
        let myname = 'Shree';
        let myname;// re-declare 
        console.log(myname);// SntaxError: Identifier 'data' has already been declared

    * We can re-assign same name variable in case of 'let';
        let myname = 'Shree';
            myname = 'Radhey';// re-assign same name variable
        console.log(myname);// Radhey

    * We can't re-initialize same name variable in case of 'let'.
        let data = 'Govind';
        let data = 'Shree Hari';
        console.log(data);// SntaxError: Identifier 'data' has already been declared 

    * We can declare variable without initialization/assignment.
        let data;
        console.log(data);// undefined

? 3... const keyword :

    * We can't re-declare, re-assign & re-initialize same name variable in case of 'const'.
    * We can't declare variable without initialization/assignment.
        const count;// declaration with out assignment not posible
        const count = 'Number';
        //   count = 'Hello';// re-assign not posible
        const count = 'Data';// re-initialization not posible
        console.log(count);

        


! Questions :-------------------------->> 

    var d = 90;
    var d = 78;
    console.log(d);// 78

    var e = 'shree';
    let e = 'shivam';
    console.log(e);// SyntaxError: Identifier 'e' has already been declared

    const lm = 'Golu';
    var lm = 'Anshoo';
    console.log(lm);// SyntaxError: Identifier 'lm' has already been declared

    misti = 'Hanssi';
    let misti = 'Anshi';
    console.log(misti);// ReferenceError: Cannot access 'misti' before initialization
 