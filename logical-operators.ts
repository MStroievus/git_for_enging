
function checkNumber(num: number) {
  if (num > 3 && num < 5) {
    console.log(`${num} більше 3 і менше 5`);

  }

  console.log(`${num} не підходить`);

}

checkNumber(4); 
checkNumber(7); 



function checkRange(num: number): number {
  if (num < 0 || num > 100) {
    console.log(`${num} за межами від 0 до 100`);
    return -1;
  }

  console.log(`${num} в межах від 0 до 100`);
  return num;
}

checkRange(150); 
checkRange(50);  

function checkEven(num: number) {
  const isEven = num % 2 === 0;

  if (!isEven && num > 0) {
    console.log(`${num} непарне і додатне`);
  }

  console.log(`${num} парне або не додатне`);
}

checkEven(5); 
checkEven(8); 



function checkAge(age: number | null) {
  const realAge = age ?? 18;

  if (realAge >= 18 && realAge <= 60) {
    console.log(`${realAge} — дорослий`);
  }
  console.log(`${realAge} — не підходить`);
}

checkAge(null);
checkAge(70);

function checkTicket(age: number) {
  if (age > 0 && age < 14) {
    console.log(`${age} років — безкоштовно`);
  } else {
    console.log(`${age} років — платно`);
  }
}

checkTicket(10);
checkTicket(20);



