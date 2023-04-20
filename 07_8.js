! Array :--------------------------------------------------->>

    const arr = ['hello','tushar','golu',1,4,7,10];

    //* display array : 
    console.log(arr);

    //* find array length :
    console.log(arr.length);

    //* access particular index element :
    console.log(arr[2]);

    //* delete particular index element : 
    delete arr[2];
    console.log(arr);
    console.log(arr.length);

    //* access element after delete element :
    console.log(arr[2]);

    //* add new element in an array : 
    arr[2] = 'Gulshan';
    console.log(arr);

    //* how to overwrite array element with new element? :
    arr[1] = 678;
    console.log(arr);

! ...Methods :------------------------------------------>>
//? push(), pop() & shift(), unshift() :-> 
//* push() :-
    const arr1 = ['hello','tushar','kaise','ho'];
    const res1 = arr1.push(1987,1965);
    console.log(arr1);
    console.log(res1);
    //Note: Appends new elements to the end of an array, and returns the new length of the array.

//* pop() :-
    const arr2 = ['hello','tushar','kaise','ho'];
    const res2 = arr2.pop();
    console.log(arr2);
    console.log(res2);
    //Note: Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

//* shift() :-
    const arr3 = ['hello','tushar','kaise','ho'];
    const res3 = arr3.shift();
    console.log(arr3);
    console.log(res3);
    //Note: Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

//* unshift() :-
    const arr4 = ['hello','tushar','kaise','ho'];
    const res4 = arr4.unshift('?');
    console.log(arr4);
    console.log(res4);
    //Note: Inserts new elements at the start of an array, and returns the new length of the array.

//? some(), every() & filter() & map(), forEach() :->
//* some() :- 
    const arr5 = [20,50,40,30,10,70,90];
    const res5 = arr5.some((e) => e >= 30);
    console.log(res5);
    //Note: Determines whether the specified callback function returns true for any element of an array.

//* every() :-
    const arr6 = [20,50,40,30,10,70,90];
    const res6 = arr6.every((i) => i >= 30);
    console.log(res6);
    //Note: Determines whether all the members of an array satisfy the specified test.

//* filter() :-
    const arr7 = [20,50,40,30,10,70,90];
    const res7 = arr7.filter((flt) => flt > 30);
    console.log(res7);
    //Note: Returns the elements of an array that meet the condition specified in a callback function.

//* map() :-
    const arr8 = [20,'Tushar',40,30,10,70,90];
    const res8 = arr8.map((i) => i*2);
    console.log(res8);

    const res8_2 = arr8.map((i) => console.log(i));
    //Note: Calls a defined callback function on each element of an array, and returns an array that contains the results.

//* forEach() :-
    const arr9 = [20,'Tushar',40,30,10,70,90];
    const res9 = arr9.forEach((value,i) => console.log(i+ " : " +value));
    console.log(res9);



! String :

    const str1 = 'String in Single Quotes.';
    console.log(str1);

    const str2 = "String in Double Quotes.";
    console.log(str2);

    // const str3 = 'Hello'Sir'; ❌
    // const str3 = "Hello"Golu"; ❌
    // console.log(str3);

    const str3 = 'Hello\' Sir'
    console.log(str3);
  
    const str4 = "Hello\" DM";
    console.log(str4);

    const strs1 = "Hello Sir";
    const strs2 = "What are you doing now ?";
    console.log(strs1 + ", " + strs2);

//* Problem :
    const fname = "Tushar Sharma";
    const fage = 34;
    console.log("My friend's name is " + fname + ". He is " + fage + 'years old.');

//* template Litral :  
    console.log(`My friend's name is ${fname}. He is ${fage} years old.`);

! ...Methods :---> 
//? toUpperCase() , toLowerCase() :------>
//* toUpperCase() :-> 
    const str1 = 'JavaScript is a Interprater Language.';
    const res1 = str1.toUpperCase();
    console.log(res1);
    //Note: Converts all the alphabetic characters in a string to uppercase.

//* toLowerCase() :-> 
    const res2 = str1.toLowerCase();
    console.log(res2);
    //Note: Converts all the alphabetic characters in a string to lowercase.

//? trim(), trimStart(), trimEnd() :-----> 
    const str2 = '         JavaScript        '
    console.log(str2.length);
    console.log(str2);

    const res3 = str2.trimStart();
    console.log(res3);
    //Note: Removes the leading white space and line terminator characters from a string.

    const res4 = str2.trimEnd();
    console.log(res4);
    //Note: Removes the trailing white space and line terminator characters from a string.

    const res5 = str2.trim();
    console.log(res5);
    //Note: Removes the leading and trailing white space and line terminator characters from a string.




! Object :

    const obj1 = {
        names: 'Tushar',
        address: 'GuruGram',
        country: 'India'
    }
    console.log(obj1);

    //* access a property : 
    console.log(obj1.names);
    console.log(obj1['address']);

    //* add new property : 
    obj1.skill = 'CSS';
    console.log(obj1);

    //* re-assign property : 
    obj1.address = 'Delhi';
    console.log(obj1);

    //* delete property : 
    delete obj1.address;
    console.log(obj1);

    //* how to access nested object properties ? : 
    const obj2 = {
        names:'Anshooman',
        address:'Delhi',
        country: {
            cnt:'India',
            alp:{
                a: 'A',
                b: 'B'
            }
        }
    }
    console.log(obj2.country.cnt);
    console.log(obj2.country.alp.a);

    //* how to write array in an object :
    const obj3 = {
        names:'Himanshu',
        skill: ['HTML','CSS']
    }

    //* access array elements :
    console.log(obj3.skill[1]);

    //* add... :
    obj3.skill[2] = "JavaScript";
    console.log(obj3.skill);

    * how to write function(method) in an object :
    const obj4 = {
        names:'Mohan',
        age: 34,
        mydata: function(){
            console.log(`My fname is ${obj4.names}. He is ${obj4.age} years old.`);
        }
    }
    obj4.mydata();

! ...Methods :------->> 

* there are different types of Methods : 
? 1. .keys()
? 2. .values()
? 3. .entries()
? 4. .create()
? 5. .assign()
? 6. .hasOwnProperty()

    ? 1... Object.keys() :-> 
        const obj1 = {
            names:'Abhishek',
            age:22,
            address:'Brampuri'
        }
        const res1 = Object.keys(obj1);
        console.log(res1);// ['names', 'age', 'address']

    ? 2... Object.values() :-> 
        const obj2 = {
            names:'Abhishek',
            age:22,
            address:'Brampuri'
        }
        const res2 = Object.values(obj2);
        console.log(res2);

        console.log(typeof obj2);
        console.log(typeof res2);
        console.log(Array.isArray(res2));

    ? 3... Object.entries() :-> 
        const obj3 = {
            names:'Abhishek',
            age:22,
            address:'Brampuri'
        }
        const res2 = Object.entries(obj3);
        console.log(res2);

    ? 4... Object.assign() :-> 
        const sourceObj = {
            names:'Abhishek',
            age:22,
            address:'Brampuri'
        }
        const targetObj = {};
        const res4 = Object.assign(targetObj, sourceObj);

        console.log('Source Object :', sourceObj);
        console.log('Target Object :', targetObj);

        sourceObj.address = 'Delhi';
        console.log('Source Object :', sourceObj);
        console.log('Target Object :', targetObj);

    ? 5... Object.create() :-> 
        const obj5 = Object.create({
            names:'Abhishek',
            age:22,
            address:'Brampuri'
        });
        delete obj5.names;
        console.log(obj5.names);

    ? 6... objName.hasOwnProperty('key') :-> 
        const obj6 = {
            names:'Abhishek',
            age:22,
            address:'Brampuri'
        }
        const res6 = obj6.hasOwnProperty('address');
        console.log(res6);