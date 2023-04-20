! Operators :----> 
Operators are operate operands.
there are different types : 
* 1. Arithmatic Operators
* 2. Comparision Operators
* 3. Assignment Operators
* 4. Logical Operators
* 5. Ternary Operator
* 6. typeof Operator

    ? 1... Arithmatic Operators :---> 
    * Additional Operators :-> (+)
        var a = 90;
        var b = 89;
        console.log(a+b);

        var a = '90';
        var b = 10;
        console.log(a+b);

        var a = 'Shree';
        var b = 101;
        console.log(a+b);

        var a = undefined;
        var b = null;
        console.log(a+b);// NaN = Not a Number

        var a = 'Hello';
        var b = 'Sir';
        console.log(a+b);

        console.log((1+2+3+4+'5')); // number + string = string

        console.log(("5"+4+3+2+1));


    * Subtraction :-> (-)
        var a = 90;
        var b = 89;
        console.log(a-b);

        var a = '10';
        var b = '20';
        console.log(a-b);
        console.log(typeof (a-b));

        console.log('10' - '5');

        console.log('-10' - '+10');
        console.log('-10' + '+10');

        console.log(null - undefined);

        console.log('shree' - 10);

        console.log('hello' - 'shree');

    * Multiplication :-> (*)
    * Division :-> (/)
        var a = 3;
        var b = 10;
        console.log(a/b);

        console.log('10'/ '5');

    * Modul :-> (%)
    * Power :-> (**)
    * Increment / Decrement :-> (++, --)


    ? 2...  Comparision Operators :---> 
    *   ==           Equal to     
    *  ===          Equal value & data type
    *  !=              Not Equal
    *  !==           Not Equal data type
    *  >               greater then
    *  <               less then
    *  >=              greater then equal
    *  <=              less then equal 

    * 1... == (Equals to) : check only value.
    var a = 10;
    var b = '10';
    console.log(a == b);

    console.log('shree' == 'Shree');

    * 2... === (Equal value & Data Type) : check value and data type.
    var a = 10;
    var b = '10';
    console.log(a == b);
    console.log(a === b);

    console.log(undefined == null);
    console.log(undefined === null);
    console.log(typeof undefined);
    console.log(typeof null);

    console.log(null == 0);
    console.log(undefined == 0);

    console.log(true == 1);
    console.log(false == 0);

    console.log(10 != 10);
    console.log(10 !== '10');


    ? 3... Logical Operators :---> 
    *  &&        AND Operator
    *  ||        OR Operator
    *   !        NOT Operator


    ? 4. Ternary Operatos :----> 

    syntax : (condition) ? true : false;