export default function Technical(){
    function displayResult(event){
       let ans1=event.target.q1.value;
       let ans2=event.target.q2.value;
       let ans3=event.target.q3.value;
       let ans4=event.target.q4.value;
       let ans5=event.target.q5.value;
       let marks=0;
       if(ans1==='B.George Washington')
       {
        marks++
       }
       if(ans2==='B.1945')
       {
        marks++
       }
       if(ans3==='A.1492')
       {
        marks++
       }
       if(ans4==='B.Jawaharlal Nehru')
       {
        marks++
       }
       if(ans5==='B.Shah Jahan')
       {
        marks++
       }
       alert("Total marks : "+marks)
    }
    return(
      <div className="container">
        <div className="h1"><h1>Technical Quiz</h1></div>
        <div className="data">
        <form onSubmit={displayResult}>
            <Question ques="Q.Who was the first President of the United States?"
            opt1="A.Thomas Jefferson"
            opt2="B.George Washington"
            opt3="C.Abraham Lincoln"
            name="q1"/>
            <Question ques="Which year did World War II end?"
            opt1="A.1943"
            opt2="B.1945"
            opt3="C.1947"
            name="q2"/>
            <Question ques="Q.In which year did Christopher Columbus discover America?"
            opt1="A.1492"
            opt2="B.1507"
            opt3="C.1520"
            name="q3"/>
            <Question ques="Q.Who was the first Prime Minister of India?"
            opt1="A.Mahatma Gandhi"
            opt2="B.Jawaharlal Nehru"
            opt3="C.Sardar Vallabhbhai Patel"
            name="q4"/>
            <Question ques="Q.Who was the Mughal Emperor who built the Taj Mahal?"
            opt1="A.Akbar"
            opt2="B.Shah Jahan"
            opt3="C.Aurangzeb"
            name="q5"/>
            <button className="submit">submit</button>
        </form>
      </div></div>
    )
}
function Question(props){
    return(
      <div>
        <h2>{props.ques}</h2>
        <input type="radio" name={props.name} value={props.opt1}/>
        <label>{props.opt1}</label>
        <input type="radio" name={props.name} value={props.opt2}/>
        <label>{props.opt2}</label>
        <input type="radio" name={props.name} value={props.opt3}/>
        <label>{props.opt3}</label>
      </div>      
    );
}