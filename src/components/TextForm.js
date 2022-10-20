import React, {useState} from "react";

export default function TextForm(props) {
    const [text,setText] = useState("");  //hooks

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text); 
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upperCase", "success");
    }
    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked" + text); 
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase", "success");
    }
    const handleOnChange = (event)=>{
        console.log("On change"); 
        setText(event.target.value)
    }

    function handleResetTextView() {
        setText("");
    }
    const handleSpeak= ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }
    // text = "new text";   //wrong way to change the state
    // setText("new text") //correct way to change the state
  return (
    <>
    <div className="container" style ={{color: props.mode==='dark'?'white':'#090b4d'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} style ={{background: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#090b4d'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleResetTextView}>Reset</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>Speak</button>
    </div>
    <div className="container my-3" style ={{color: props.mode==='dark'?'white':'#090b4d'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  );
}
