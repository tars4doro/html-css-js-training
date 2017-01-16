//"1 to 100 numbers" cycle

//'Fizz' or 'Buzz' cycle
for (var outputnumber=1; outputnumber<=100; outputnumber++) {
    if (outputnumber%5==0&outputnumber%3!=0) console.log('Buzz');
      else if (outputnumber%3==0) console.log('Fizz');
    else console.log(outputnumber);
    }
console.log('finished');

//'Fizzbuzz' cycle
for (var outputnumber=1; outputnumber<=100; outputnumber++) {
    if (outputnumber%5==0&outputnumber%3==0) console.log('FizzBuzz');
      else if (outputnumber%5==0&outputnumber%3!=0) console.log('Buzz');
      else if (outputnumber%3==0) console.log('Fizz');
    else console.log(outputnumber);
    }
console.log('finished');
