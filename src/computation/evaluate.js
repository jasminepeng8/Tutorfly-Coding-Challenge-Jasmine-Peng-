
function evaluate (question) {
    var ques = question; 
    var result;

    var nooperators = 0; 

    //STEP 1: parsing the string question into distinct units of numerical values and operations
    //array containing all numbers and operations in separate units
    var quesarray = []; 
    var tracker = 0; 
    //keep track of how many digits follow the final operator
    var digitcount = 0; 
    for (var i = 0; i < ques.length; i++) {
        if (ques.charAt(i) === "+") {
            quesarray.push(ques.slice(tracker, i));
            quesarray.push(ques.charAt(i)); 
            tracker = i + 1;
            digitcount = 0; 
            nooperators = 1; 
        }
        if (ques.charAt(i) === "-") {
            quesarray.push(ques.slice(tracker, i));
            quesarray.push(ques.charAt(i)); 
            tracker = i + 1;
            digitcount = 0; 
            nooperators = 1; 
        }
        if (ques.charAt(i) === "*") {
            quesarray.push(ques.slice(tracker, i));
            quesarray.push(ques.charAt(i)); 
            tracker = i + 1;
            digitcount = 0; 
            nooperators = 1; 
        }
        if (ques.charAt(i) === "/") {
            quesarray.push(ques.slice(tracker, i));
            quesarray.push(ques.charAt(i)); 
            tracker = i + 1;
            digitcount = 0; 
            nooperators = 1; 
        }
        if (ques.charAt(i) === "^") {
            quesarray.push(ques.slice(tracker, i));
            quesarray.push(ques.charAt(i)); 
            tracker = i + 1;
            digitcount = 0; 
            nooperators = 1;
        }
        digitcount++; 
    }
    //add the final int to the end of the question array 
    var finalElem = ques.length+1; 
    var startElem = finalElem - digitcount;
    quesarray.push(ques.slice(startElem, finalElem));


//STEP 2: completing the actual arithmetic, following an order of ^, * & /, + & -
  for(var j = 0; j < quesarray.length; j++)
  {
        if (quesarray[j] === "^") {
              var x = Number(quesarray[j-1]); 
              var y = Number(quesarray[j+1]);
 
              if (Number.isNaN(x) || Number.isNaN(y)) {
                  return result = 0; 
              } 
              var num = x ** y;
              var strnum = num.toString();
              quesarray[j-1] = strnum;
              
              //shift remaining elements
              for (var k = j; k < ((quesarray.length)-2); k++)
              {
                  quesarray[k] = quesarray[k+2];
              }
              //pop off last two empty elements 
              quesarray.pop();
              quesarray.pop();
        }
  }

  

  for(var l = 0; l < quesarray.length; l++)
  {
        if (quesarray[l] === "*" || quesarray[l] === "/") {
              var x = Number(quesarray[l-1]); 
              var y = Number(quesarray[l+1]);
 
              if (Number.isNaN(x) || Number.isNaN(y)) {
                  return result = 0; 
              } 

              if (quesarray[l] === "*"){ 
                var num = x * y; 
                var strnum = num.toString();
                quesarray[l-1] = strnum;
              }
              else if (quesarray[l] === "/") {
                var num = x / y;
                var strnum = num.toString();
                quesarray[l-1] = strnum;
              }
              //shift remaining elements
              for (var m = l; m < ((quesarray.length)-2); m++)
              {
                  quesarray[m] = quesarray[m+2];
              }
              //pop off last two empty elements 
              quesarray.pop();
              quesarray.pop();
        }
    }

    for(var n = 0; n < quesarray.length; n++)
    {
          if (quesarray[n] === "+" || quesarray[n] === "-") {
                var x = Number(quesarray[n-1]); 
                var y = Number(quesarray[n+1]);
   
                if (Number.isNaN(x)|| Number.isNaN(y)) {
                    return result = 0; 
                } 
  
                if (quesarray[n] === "+"){ 
                    var num = x + y;
                    var strnum = num.toString();
                    quesarray[n-1] = strnum;
                }
                else if (quesarray[n] === "-") {
                    var num = x - y;
                    var strnum = num.toString();
                    quesarray[n-1] = strnum;
                }
                //shift remaining elements
                for (var p = n; p < ((quesarray.length)-2); p++)
                {
                    quesarray[p] = quesarray[p+2];
                }
                //pop off last two empty elements 
                quesarray.pop();
                quesarray.pop();
          }
      }

      
      if (ques.charAt(ques.length - 1) === "%")
      {
          var number = parseFloat(question);
          return (number / 100);
      }
      if (nooperators === 0) {
          return question; 
      }
      if (quesarray.length === 1){
          result = quesarray[0];
      }

      return result; 

}

export default evaluate; 

