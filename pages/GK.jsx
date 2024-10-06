export default function GK() {
    function displayResult(event){
      let ans1=event.target.q1.value;
      let ans2=event.target.q2.value;
      let ans3=event.target.q3.value;
      let ans4=event.target.q4.value;
      let ans5=event.target.q5.value;
      let marks=0;
        if(ans1 === 'A. William Shakespeare')
        {
          marks++
        }
        if(ans2 === "B. Paris")
        {
          marks++
        }
        if(ans3 === "B.Melbourne")
        {
          marks++
        }
        if(ans4 === "A.Leonardo da Vinci")
        {
          marks++
        }
        if(ans5 === "C.Mount Everest")
        {
          marks++
        }
        alert("Total marks : "+marks )
      }
    
     return (
      <div className='container'>
  <div className='h1'><h1>General knowledge </h1> </div> 
  <div className='data'>
  <form onSubmit={displayResult}>
  <Question 
   ques = "Q. Who wrote 'Romeo and Juliet'?"
   opt1 = "A. William Shakespeare"
   opt2 = "B. Thomas alva edison"
   opt3 = "C. Albert Einstein"
   name="q1" />
  <Question 
  ques = "Q. What is the capital of France?"
  opt1 = "A. Tokyo"
  opt2 = "B. Paris"
  opt3 = "C. Europe"
  name="q2" />
  <Question 
  ques = "Q.What is the capital of Australia?"
  opt1 = "A. Sydney"
  opt2 = "B.Melbourne"
  opt3 = "C.Canberra"
  name="q3" />
  <Question 
  ques = "Q.Who painted the Mona Lisa?"
  opt1 = "A.Leonardo da Vinci"
  opt2 = "B.Pablo Picasso"
  opt3 = "C.Vincent van Gogh"
  name="q4" />
  <Question 
  ques = "Q.What is the tallest mountain in the world?"
  opt1 = "A.Mount Kilimanjaro"
  opt2 = "B.Mount Fuji"
  opt3 = "C.Mount Everest"
  name="q5" />
  
  <button className='submit'>submit</button>
  </form>
  </div></div>
  
  );}
function Question(props) {
    return (
    <div>
  <h2>{props.ques}</h2>
  <input type='radio'name={props.name} value={props.opt1}/>
  <label>{props.opt1}</label>
  <input type='radio' name={props.name} value={props.opt2}/>
  <label>{props.opt2}</label>
  <input type='radio' name={props.name} value={props.opt3}/>
  <label>{props.opt3}</label>
  
  </div>
  );
  }
  