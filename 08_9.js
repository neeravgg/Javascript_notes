! call by value & call by reference :-

! call by value :------->> (using primitive data types)
* how to copy a variable value in an another value ? 
    let a = 10;
    let b = a;
    console.log('a :',a);
    console.log('b :',b);

    a = a+2;
    console.log('a after change in a :',a);
    console.log('b after change in a :',b);

    b = a+5;
    console.log('a after change in b :',a);
    console.log('b after change in b :',b);

! call by reference :------>> (using non-primitve data types)
* how to copy an object properties in an another object ?
    let object1 = {
        names:'Aman',
        age:25,
        address:'Mathura'
    }
    let object2 = object1;// (copy reference(address))
    console.log('object1 :', object1);
    console.log('object2 :', object2);

    //! Problem !? 
    object2.age = 34;
    console.log('object1 after change in object2 :', object1)
    console.log('object2 after change in object2 :', object2);

? Shallow Copy :
* 1. {...objName}
* 2. Object.assign(target, source);

    ? 1. {...objName} :-> 
    let object1 = {
        names:'Aman',
        age:25,
        address:'Mathura'
    }
    let object2 = {...object1};
    // console.log('object1 :', object1);
    // console.log('object2 :', object2);

    object2.age = 34;
    console.log('object1 after change in object2 :', object1)
    console.log('object2 after change in object2 :', object2);

    ? 2. Object.assign(target, source); :-> 
    let object1 = {
        names:'Aman',
        age:25,
        address:'Mathura'
    }
    let object2 = Object.assign({}, object1);
    console.log('object1 :', object1);
    console.log('object2 :', object2);

    object2.age = 34;
    console.log('object1 after change in object2 :', object1)
    console.log('object2 after change in object2 :', object2);

    //! Problem !?
    let object1 = {
        names:'Aman',
        age:25,
        address:'Mathura',
        city:{
            a:'A',
            b:'B'
        }
    }
    let object2 = Object.assign({}, object1);
    // console.log('object1 :', object1);
    // console.log('object2 :', object2);

    object2.city.a = 'Address';
    console.log('object1 after change in object2 :', object1)
    console.log('object2 after change in object2 :', object2);

? Deep Copy :
JSON : JavaScript Object Notation. 
JSON.stringify() : 
    let object1 = {
        names:'Aman',
        age:25,
        address:'Mathura'
    }
    =--=-=-=-=> 
    let object1 = {
        'names':'Aman',
        'age':25,
        'address':'Mathura'
    }

JSON.parse() : 
//Note: Converts a JavaScript Object Notation (JSON) string into an object.
    let object1 = {
        'names':'Aman',
        'age':25,
        'address':'Mathura'
    }
    =-=-=-=-=>
    let object1 = {
        names:'Aman',
        age:25,
        address:'Mathura'
    }

    let object1 = {
        names:'Aman',
        age:25,
        address:'Mathura',
        city:{
            a:'A',
            b:'B'
        }
    }
    const object2 = JSON.parse(JSON.stringify(object1));
    // console.log('object1 :', object1);
    // console.log('object2 :', object2);

    object2.city.a = 'Address';
    console.log('object1 after change in object2 :', object1)
    console.log('object2 after change in object2 :', object2);

    ! Problem !?
    let object1 = {
        names:'Aman',
        age:25,
        address:'Mathura',
        city:{
            a:'A',
            b:'B'
        },
        funs: function(){
            console.log('Hello Sir');
        }
    }
    const object2 = JSON.parse(JSON.stringify(object1));
    // console.log('object1 :', object1);
    // console.log('object2 :', object2);

    object2.city.a = 'Address';
    console.log('object1 after change in object2 :', object1)
    console.log('object2 after change in object2 :', object2);


//? using 'lodash' :--->
    let object1 = {
        names:'Aman',
        age:25,
        address:'Mathura',
        city:{
            a:'A',
            b:'B'
        },
        funs: function(){
            console.log('Hello Sir');
        }
    }
    const object2 = _.cloneDeep( object1 );
    // console.log('object1 :', object1);
    // console.log('object2 :', object2);

    object2.city.a = 'Address';
    console.log('object1 after change in object2 :', object1)
    console.log('object2 after change in object2 :', object2);