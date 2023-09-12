
import React, {useState} from "react";
import './index.css'

function App() {

  //state - 4 states

  const[weight, setWeight]=useState(0);
  const[height, setHeight]=useState(0);
  const[bmi, setBmi]=useState('');
  const[message, setMessage]=useState('');

//calculation

let calcBmi=(event)=>{
  //prevent submitting

  event.preventDefault();
  if (weight === 0 || height === 0){
    alert("Please enter a valid weight and height")
  }
  else{
    let bmi= (weight/(height*height))*10000
    setBmi(bmi.toFixed(1)) //rounding to 1 decimal place

    // logic for message
    if(bmi<18.5){
      setMessage('You are Underweight')
    }
    else if(bmi >= 18.5 && bmi <=25){
      setMessage('You are Normal')
    }
    else if(bmi > 25 && bmi <=30){
      setMessage('You are Overweight')
    }
    else{
      setMessage('You have Obesity')
    }
  }
}

//show image based on BMI
let imgSrc

if (bmi<18.5){
  imgSrc=require('../src/assets/young-man-white-shirt-underweight-comic-cartoon-illustration-unhealthy-nutrition-article-image-vector-character-79246727.webp')

}
else if(bmi >= 18.5 && bmi <=25){
  imgSrc=require('../src/assets/young-man-white-shirt-normal-body-build-comic-cartoon-illustration-diet-nutrition-weight-loss-health-good-h-79246676.webp')
}

else if(bmi > 25 && bmi <=30){
  imgSrc=require('../src/assets/fat-cartoon-character-boy-overweight-isolated-vector-illustration-white-background-79246855.webp')
}
else{
  imgSrc=require('../src/assets/fat-man-fast-food-isolated-white-background-46031158.webp')
}




let reload =()=>{
  window.location.reload()
}

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (in kgs)</label>
            <input value={weight} onChange={(event)=>setWeight(event.target.value)} placeholder="Enter your weight in kgs"/>
          </div>
          <div>
            <label>Height (in cms)</label>
            <input value={height} onChange={(event)=>setHeight(event.target.value)} placeholder="Enter your height in cms" />
          </div>
          <div>
            <button type="submit">Submit</button>
            <button className="btn"  onClick={reload} type="submit">Reload</button>
          </div>
        </form>
        <div>
          <h3 className="center">Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc}/>
        </div>
      </div>
    </div>
  );
}

export default App;
