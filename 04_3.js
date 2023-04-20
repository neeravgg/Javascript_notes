! Control Statement :----> 
* there are different types : 
* 1. Conditional Statement 
* 2. Looping Statement 

    ? 1... Conditional Statement :---------->
    * if
    * if else...
    * if... else if
    * switch statement 
    * ( ternaray operator )

        ? 1... if statement :--> 
        * syntax : initialization;
        *          if(condition){
        *            statement;
        *           }

            var age = prompt('Enter Valid Age...');
            if(age >= 25){
                console.log('You are aligible');
            }

            logical operators :---> 
            AND : ( && )
            OR : ( || )

            * AND :--> 'if any condition is low then output wil be low.'
            let age = parseInt(prompt('Enter Your age...'));
            if(age > 18 && age < 40){
                console.log('Eligible for UPSC...');
            }else{
                console.log('Not Eligible...');
            }

            * OR :--> 'if any input is high then output will be hight.'
            let number = 90;
            if(number === 90 || number === 56){
                console.log('Okay');
            }

        ? 2... if else statement :--> 
        * syntax : initialization;
        *          if(condition){
        *             srtatement;
        *          }else{
        *             statement;
        *          }

            var age = prompt('Enetr Your Valid Age...');
            if(age >= 30){
                console.log('OKay');
            }else{
                console.log('Not OKay');
            }

        ? 3... if... else if statement :----> 
        * syntax : intialization;
        *          if(condition){
        *             statement;
        *          }else if(condition){
        *             statement;
        *             ...
        *          }else{
        *             statement;
        *          }

            var number = parseInt(prompt('Enter Valid Number....'));
            debugger;
            var number = 3;
            if(number === 1){
                console.log('ONE');
            }else if(number === 2){
                console.log('TWO');
            }else if(number === 3){
                console.log('THREE');
            }else{
                console.log('Enter Valid Number...🤔');
            }

        ? 4... switch case :---->
        * syntax : initialization;
        *          switch(){
        *             case condition:
        *                 statement;
        *                 break;
        *             case condition:
        *                 statement;
        *                 break;  
        *             ... 
        *             default:
        *                 statement;
        *                 break;  
        *          }

            debugger;
            const a = 5;
            // const b = prompt('Enter Operator...');
            const b = '-';
            const c = 10;
            switch(b){
                case '+':
                    console.log(a+c);
                    break;
                case '-':
                    console.log(a-c);
                    break;
                case '*':
                    console.log(a*c);
                    break;
                case '/':
                    console.log(a/c);
                    break;
                default:
                    console.log('Enter Valid Operator...');
            }

        ? 5... Ternary Operator :---> 
        * syntax : initialization;
        *          let vrName = (condition) ? true : false;

        let marks = parseInt(prompt('Enter Your Marks ?'));
        let result = (marks >= 90 && marks <= 100) ? 'Topper' : 
                     (marks >= 80) ? 'Avarage' :
                     (marks > 20) ? 'Pass' :
                     (marks <= 20) ? 'Fail' : 'Enter Valid Marks...';
        console.log(result);

        let percentage = parseInt(prompt('Enter Your Percentage'));
        
        using if else if statement : 
        if(percentage <= 40){  // 0 to 40 : fail
            console.log('Fail 😔');
        }else if(percentage <= 60){ // 41 to 60 : pass
            console.log('Pass 😀');
        }else if(percentage <= 80){ // 61 to 80 : average
            console.log('Average 😆');
        }else if(percentage <= 100){ // 81 to 100 : topper 
            console.log('Toppper Beta 😎');
        }else{
            console.log('Enter Valid Percentage');
        }

        let percentage = parseInt(prompt('Enter Your Percentage'));

        using ternary operator : 
        let result = (percentage <= 40) ? console.log('Fail 😔') : 
                     (percentage <= 60) ? console.log('Pass 😀') :
                     (percentage <= 80) ? console.log('Average 😆') :
                     (percentage <= 100) ? console.log('Toppper Beta 😎') : console.log('Enter Valid Percentage');

        let result = (percentage <= 40) ? ('Fail 😔') : 
                     (percentage <= 60) ? ('Pass 😀') :
                     (percentage <= 80) ? ('Average 😆') :
                     (percentage <= 100) ? ('Toppper Beta 😎') : ('Enter Valid Percentage');
        console.log(result);
        alert(result);
        document.write(result);
        confirm(result);


    ? 2... Looping Statement :-------> 
    * 1. while loop 
    * 2. do... while loop 
    * 3. for loop 

        ? 1... while loop :-> this is alsow known as entry control loop.
        syntax : initialization;
                 while(condition){
                    statement;
                    incre/decre;
                 }

            let num = 1;
            while(num < 10){
                console.log(num);
                num++;
            }
            console.log('last value : ',num);

        ? 2... do... while loop :-> exit control loop.
        syntax : initialization;
                 do{
                     statement;
                     incre/decre;
                 }while(condtion);

            let counts = 2;
            do{
                console.log(counts);
                counts+=2;
            }while(counts <= 20);
            console.log('last value :', counts);

        ? 3.. for loop :---> 
        syntax : for(initialization; condition; incre/decre){
                    statement;
                 }          

            for(var num = 1; num < 5; num++){
                console.log(num);
            }
            console.log(num);