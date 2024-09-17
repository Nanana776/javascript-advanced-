 function reverseString(s){
     try{
        return s.split('').reverse().join('');}
      catch(error){
        console.error(error.message);
          return s;}
     }
 console.log(reverseString('54'));

 function isPositive(a){
    if(a===0){
        throw new Error("Zero Error")}
     if(a<0){
        throw new Error("Negative Error")}
      if(a>0){
        console.log("yes")}
     }
    try{
        isPositive(-3)}
    catch(e){
        console.error(e)}

  function reverseString(s) {
            try { 
                if (typeof s!== "string") {
                   throw new Error("s.split is not a function") }
                      return s=s.split("").reverse().join("")
            }
            catch(e){
        console.error(e.messsage)}
        }
    console.log(reverseString('12'));

  function gradeLabs(labs) {
    try{
        for (let i=0; i < labs.length; i++) {
           let lab = labs[i];
            if(typeof lab.runlab !=='function'){
             throw new Error("Error thrown")
               }
         let result = lab.runLab(3);
           console.log(`${lab.student} code worked: ${result === 27}`);
        }
      }
      catch(e){
        console.error(e.message)
      }
    }

     let studentLabs = [
        {
           student: 'Carly',
           runLab: function (num) {
              return Math.pow(num, num);
           }
        },
        {
           student: 'Erica',
           runLab: function (num) {
              return num * num;
           }
        }
     ];

     let studentLabs2 = [
        {
        student: "Blake",
        myCode: function (num) {
        return Math.pow(num, num);
        },
        },
        {
        student: "Jessica",
        runLab: function (num) {
        return Math.pow(num, num);
        },
        },
        {
        student: "Mya",
        runLab: function (num) {
        return num * num;
        },
        },
        ];
        gradeLabs(studentLabs2);
