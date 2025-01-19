console.log("Hello world")
 var username = "Drishya Karki";//Global variable//
 let password = "Hello world";//Local block//
 const userID = 1;//constant value, cannot change//

 let score =10;
 let temperature = 33.333;
 let price = 1000000;

 console.log(score);

 let num1='sdfasdf'
 console.log("ba"+Number(num1).toString().toLowerCase()+"a");

 console.log(Math.ceil(temperature));
 console.log(Math.floor(temperature));
 eng= console.log(price.toLocaleString("en-IN"));
//  console.log(parseInt(eng).toLocaleString("en"));

let today = new Date();
    console.log(today);
    console.log(today.toString());
    console.log(today.toDateString());



 let name= "drishya";
 console.log(name[0]);
 for(i=0;i<name.length;i++)
 {
    console.log(i);
 }

 const div = (num)=>num/2;

 console.log(`This is it ${div(4)}`);

 let num = [1,2,3,4,5];

 const map1 = num.map((x) => x % 2==0);

 console.log(map1);

 const map2=num.filter((x)=> x==5);
 console.log(map2);

 const map3=num.reduce((acc,curr) => acc+curr);
 console.log(map3);
 
 
