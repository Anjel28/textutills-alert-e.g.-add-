import React, { useState } from 'react'

export default function TextForm(Props) {
  const handleUpClick = () =>{
    //console.log("Uppercase was clicked" + text);
    let newText =text.toUpperCase();
    setText (newText)
    Props.showAlert("converted to uppercase!","success");
  }

  const handleLoClick = () =>{
     let newText =text.toLowerCase();
    setText (newText)
     Props.showAlert("converted to lowercase!","success");
  }
  const handleClearClick = () =>{
    //console.log("On change");
     let newText ='';
    setText (newText)
     Props.showAlert("Text Cleared!","success");
  }

   const handleOnChange = (event) =>{
    //console.log("On change");
   setText (event.target.value);
   
  
  }

  const handleCopy= () =>{
    console.log("I am copy");
    var text =document.getElementById("myBox");
    //text.ariaSelected();
    text.setSelectiononRange(0, 9999);
    navigator.clipboard.writtenText(Text.value);
     Props.showAlert("Text  copied!","success");
  }

  const handleExtraSpaces = () =>{
   let newText = text.split(/[ ] +/);
   setText(newText.join(" "))
    Props.showAlert("Extra Spaces Remove!","success");
  }

  const [text, setText] = useState("");
   
  return (
    <>
    <div className="container" style={{color:Props.mode=== 'dark'?'white':'black'}}>
      <h1>{Props.heading}</h1>
<div className="mb-3">
  <label for="my Box" class="form-label">Example textarea</label>
  <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor:Props.mode=== 'dark'?'grey':'white', color:Props.mode=== 'dark'?'white':'black'}} id="my Box" rows="8"></textarea>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Rermove Extra Spaces</button>
</div>
    </div>
    <div className="container"style={{backgroundColor:Props.mode=== 'dark'?'grey':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split("").length} words and {text.length} characters</p>
      <p>{0.008 * text.split("").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbook to preview it here"}</p>
    </div>
    </>
  )
}
