* How to use a object or array's single property or element ?
? in case of 'object' :---->
    const obj1 = {
        names:'Govind',
        age:34,
        addrss:'Gokul'
    }
    //Note: find object length :---  console.log(Object.keys(obj1).length);
    let hname = obj1.names;
    let hage = obj1.age;
    let haddress = obj1.addrss;
    console.log(`My name is ${hname}. I am ${hage} years old. I am living in ${haddress}.`); 

? in case of 'array' :----->    
    const arr1 = ['Hello','Shivam','Golu','Molu'];
    let ind1 = arr1[0];
    let ind2 = arr1[1];
    let ind3 = arr1[2];
    let ind4 = arr1[3];
    console.log(`${ind1} ${ind2}. My Frined's name ${ind3} and ${ind4}.`);


! Destructring :----->> 
? in case of 'object' :----->
    const obj1 = {
        names:'Govind',
        age:34,
        addrss:'Gokul'
    }
    const {names, address, age} = obj1;
    console.log(names);

    const obj1 = {
        names:'Govind',
        age:34,
        addrss:'Gokul',
        city: {
            a: 'A',
            b: 'B'
        },
        myf: function(){
            return ('Hello');
        }
    };
    const {names, age, addrss, city:{a,b}, myf} = obj1;
    console.log(myf());

? in case of 'array' :------> 
    const arr1 = ['Hello','Shivam','Golu','Molu'];
    const [val1, val2, val3, val4] = arr1;
    console.log(`${val1} ${val2}. My Frined's name ${val3} and ${val4}.`);

    const arr1 = ['Hello','Gopal','Golu','Molu'];
    const [val1, val2='Gopu', val3, val4] = arr1;
    console.log(`${val1} ${val2}. My Frined's name ${val3} and ${val4}.`);

    const arr1 = ['Hello','Gopal','Golu','Molu'];
    const [name1, name2, ...name3] = arr1;
    console.log(name1, name2, name3[0]);

    const arr1 = ['Hello','Gopal','Golu','Molu',[1,2,3,4,5]];
    const [val1,val2,val3,val4,[a,b,c,d,e]] = arr1;
    console.log(a);
    console.log(b);