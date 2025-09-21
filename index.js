let student_id = 20240118392;
let base_no = student_id % 10;

function calculateGrade(score) {
   let grade = score * 10 + 5;
   if (grade < 60) {
      return 'F';
   }
   else if (grade >= 60 && grade < 70) {
      return 'D';
   }
   else if (grade >= 70 && grade < 80) {
      return 'C';
   }
   else if (grade >= 80 && grade < 90) {
      return 'B';
   }
   else if (grade >= 90 && grade <= 100) {
      return 'A';
   }
}

function showStars(rows) {
   rows += 2;
   for (let i = 0; i < rows; i++) {
      let result = "";
      for (let j = 0; j <= i; j++) {
         result += "★";            
      }
      console.log(result);
   }
}

function isPrime(n) {
   n += 10;
   let isPrimeFlag = true;
   for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0) {
         isPrimeFlag = false;
         break;
      }
   }
   if (isPrimeFlag) {
      console.log("Prime");
   }
   else {
      console.log("Not Prime");
   }
}

function multiplicationTable(n) {
   for (let i = 1; i <= 10; i++) {
      console.log(n + " * " + i + " = " + n*i );
   }
}

multiplicationTable(base_no);