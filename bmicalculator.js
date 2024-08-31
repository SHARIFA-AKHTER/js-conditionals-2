let bmiWeight = 50;
 let bmiHeight = (24.9)^2;


// console.log(bmiWeight);
// console.log( bmiHeight);



 if(bmiWeight < 18.5){

  console.log("you are underweight");

 }
 else if(bmiWeight  >= 18.5 && bmiHeight <=24.9){
    console.log("you are normal");
 }

 else if(bmiWeight >= 25 && bmiHeight <= 29.9){
    console.log("you are overweight");
 }
else{
    console.log("you are obese");
}

//you are Overweight cause your bmi weight is more than 25kg and bmiHeight is less than 29.9m