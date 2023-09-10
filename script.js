// let name = prompt("Enter Your Name");
// let cname = prompt("Enter Your Crush name");



// let random = Math.random();
// let b = Math.floor(random * 100)+1;


// alert("This is your love Percentage " + b + "%");



    // let name = prompt("Enter Your Name");
    // let cname = prompt("Enter Your Crush's Name");
  
    // let random = Math.random();
    // let lovePercentage = Math.floor(random * 100) + 1;

    // if (lovePercentage > 70) {
    // alert("Your Love Percentage with " + cname + " is " + lovePercentage + "%. You love eachother like kenya love kanye");
    // }else{
    //     alert("Your Love Percentage with " + cname + " is " + lovePercentage + "%");
    // }


        // function BMICal(weight, height) {
    //     let BMI = weight / (height * height);
    //     let interpretation;
      
    //     if (BMI > 24.9) {
    //       interpretation = "Your BMI is " + BMI + ". You are overweighted.";
    //     } else if (BMI >= 18.5) {
    //       interpretation = "Your BMI is " + BMI + ". Your weight is normal.";
    //     } else {
    //       interpretation = "Your BMI is " + BMI + ". You are underweight.";
    //     }
      
    //     return interpretation;
    //   }

function isLeap(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0){
      if (year % 400 == 0 ){
        console.log("Leap Year");
      }else {
        console.log("Not Leap Year");
      }
    }else {
      console.log("Leap Year");
    }
  }else {
    console.log("Not Leap Year");
  }
}

isLeap(2028);