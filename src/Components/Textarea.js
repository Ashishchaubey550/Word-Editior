import React, {useState} from 'react'

export default function Textarea(props) {
        const handleup =()=>{
            // console.log("Upper was click" + text);
            let newText = text.toUpperCase();
            setText(newText)
        }
        const handledown =()=>{
            // console.log("Upper was click" + text);
            let newText = text.toLowerCase();
            setText(newText)
        }
        const handleclear =()=>{
            // console.log("Upper was click" + text);
            let newText = (" ");
            setText(newText)
        }
        const handleonChange =(event)=>{
            // console.log("Upper was click");
            setText(event.target.value);
        }
        const[text, setText] = useState("Enter Text Here");
return (
    <>
    <div className='container'> 
        <h2>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control"  value = {text} onChange={handleonChange} id="mybox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2"  onClick={handleup}>Convert Uppercase</button>
        <button className="btn btn-secondary mx-"  onClick={handledown}>Convert Uppercase</button>
        <button className="btn btn-secondary mx-2"  onClick={handleclear}>Clear</button>
    </div>
    <div className=" container my-3 ">
        <h2>Your Text Summary </h2>
        <p> {text.split(" ").length} word And {text.length} Character </p>
        <p>  {0.008 * text.split(" ").length} Minutes To Read This  </p>
    </div>
    </>
)
}
