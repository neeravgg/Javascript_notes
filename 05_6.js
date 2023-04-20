! Scopes :---> 
* there are different types :
? 1. Global Scope
? 2. Local Scope -> function scope / block scope

    ? 1... Global Scope :---> 
        var a = 30;// global scope 
        function num(){
            console.log(a);// 30
        }
        num();
        console.log(a);// 30

    ? 2... Local Scope :---> 
        function demo(){
            var a = 20;// local scope
            console.log(a);// 20
        }
        demo();
        console.log(a);// ReferenceError: a is not defined


?------------------------------------------------
* var -> function scope 
* let -> block scope 
* const -> block scope 

    ! function scope :----> 
        var a = 40;// global scope
        function demo(){
            var a = 30;// function scope
             console.log(a);
        }
        demo();
        console.log(a);

        var a = 30;
        function dmeo(){
            a = 60;
            console.log(a);
        }
        dmeo();
        console.log(a);

      
!!!!!!!!!!!!!!!!!! Prectice :------------------------>> 
 var a = 'Hello';
 {
    var a = 40;
    console.log(a);
 }
 console.log(a);

let a = 'Hello';// global scope
{
   let a = 40;// block scope
   console.log(a);
}
console.log(a);

const a = 'Hello';// global scope
{
   const a = 40;// block scope
   console.log(a);
}
console.log(a);

{
    var a = 'Hello';
}
console.log(a);

{
    let b = 'Hello';
}
console.log(b);

{
    const c = 'Hello';
}
console.log(c);



    const name = 'Tushar';// global scope 
    function demo(a){
        let name = a;// block scope
        console.log(a);// Golu
        if(name === 'Golu'){
            let b = name;// block scope 
            console.log(b);// Golu
        }
        console.log(b);// b is not defined
    }
    demo('Golu');
    console.log(name);// Tushar