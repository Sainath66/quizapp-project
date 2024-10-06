export default function Technical(){
    function displayResult(event){
       let ans1=event.target.q1.value;
       let ans2=event.target.q2.value;
       let ans3=event.target.q3.value;
       let ans4=event.target.q4.value;
       let ans5=event.target.q5.value;
       let marks=0;
       if(ans1==='A.Cascading Style Sheet')
       {
        marks++
       }
       if(ans2==='C.HTML')
       {
        marks++
       }
       if(ans3==='A.Uniform Resource Locator')
       {
        marks++
       }
       if(ans4==='B.It specifies the alternate text for the image')
       {
        marks++
       }
       if(ans5==='C.Character')
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
            <Question ques="Q. What does CSS stand for?"
            opt1="A.Cascading Style Sheet"
            opt2="B.Creative Style Selector"
            opt3="C.Computer Style Sheet"
            name="q1"/>
            <Question ques="Q.Which of the following is a programming language commonly used for front-end web development?"
            opt1="A.Python"
            opt2="B.Java"
            opt3="C.HTML"
            name="q2"/>
            <Question ques="Q.What does the acronym 'URL' stand for?"
            opt1="A.Uniform Resource Locator"
            opt2="B.Universal Remote Link"
            opt3="C.United Resource Library"
            name="q3"/>
            <Question ques="Q.What is the purpose of the 'alt' attribute in HTML image tags?"
            opt1="A.It defines the alignment of the image"
            opt2="B.It specifies the alternate text for the image"
            opt3="C.It controls the size of the image"
            name="q4"/>
            <Question ques="Q.Which of the following is NOT a valid data type in JavaScript?"
            opt1="A.String"
            opt2="B.Number"
            opt3="C.Character"
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