export default function Puzzle() {
    function displayResult(event){
      let ans1=event.target.q1.value;
      let ans2=event.target.q2.value;
      let ans3=event.target.q3.value;
      let ans4=event.target.q4.value;
      let ans5=event.target.q5.value;
      let marks=0;
        if(ans1 === 'C.Keyboard')
        {
          marks++
        }
        if(ans2 === "A.Footsteps")
        {
          marks++
        }
        if(ans3 === "A.Coin")
        {
          marks++
        }
        if(ans4 === "A.Letter 'M'")
        {
          marks++
        }
        if(ans5 === "B.Bottle")
        {
          marks++
        }
        alert("Total marks : "+marks )
      }
    
     return (
      <div className='container'>
  <div className='h1'><h1><strong>Brain teaser</strong></h1></div> 
  <div className='data'>
  <form onSubmit={displayResult}>
  <Question 
   ques = "Q. What has keys but can't open locks?"
   opt1 = "A.Piano"
   opt2 = "B.Computer"
   opt3 = "C.Keyboard"
   name="q1" />
  <Question 
  ques = "Q.  The more you take, the more you leave behind. What am I?"
  opt1 = "A.Footsteps"
  opt2 = "B.Time"
  opt3 = "C.Money"
  name="q2" />
  <Question 
  ques = "Q.What has a head, a tail, is brown, and has no legs?"
  opt1 = "A.Coin"
  opt2 = "B.Snake"
  opt3 = "C.Horse"
  name="q3" />
  <Question 
  ques = "Q. What comes once in a minute, twice in a moment, but never in a thousand years?"
  opt1 = "A.Letter 'M'"
  opt2 = "B.The Sun"
  opt3 = "C.The Moon"
  name="q4" />
  <Question 
  ques = "Q.What has a neck but no head?"
  opt1 = "A.Shirt"
  opt2 = "B.Bottle"
  opt3 = "C.Clock"
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
  