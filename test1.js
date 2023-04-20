! Test :---->> 15/apri/2023

? 1. What is JavaScript ?
? 2. What is Variables & Data Types ?
? 3. Difference between 'var', 'let', 'const'.
? 4. 
   var a = 10;
   let a = 20;
   console.log(a);

   num1 = 'Hello';
   var num1 = 'World !';
   console.log(num1);

? 5. 
! Wrong :
    function sum(a,b=12){
    return a+b;
    };
    sum(10,30);

* Right : 
    function sum(a,b=12){
        return a+b;
    };
    console.log(sum(10,30));

? 6. Write a Syntax of Ternary operator and a example.

? 7. 
    if('#$%^&'){
    function sayHi(a){
      console.log(a);
    }; sayHi('Hi...');
  }else{
    function err(b){
      console.log(b);
    }; err('Error');
  }

? 8. 
    let mysay = () => retrun 'Hello'; mysay();

? 9. 
    function demo(){
    console.log(a);
    a = 10;
    console.log(a);
    var a = 30;
    console.log(a);
};
demo();

? 10.
     const a = 20;
     function vals(){
         const a = 30;
         console.log(a);
     };
     console.log(a);
     vals();
     console.log(a);