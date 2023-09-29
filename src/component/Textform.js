import React, {useState}from 'react'
export default function Textform(props) {
    const handleupcase=()=>{
        console.log('uppercase was changed' + text)
        let newtext=text.toLocaleUpperCase()
        setText(newtext)
    }
    const handlelocase=()=>{
        console.log('uppercase was changed' + text)
        let newtext=text.toLowerCase()
        setText(newtext)
    }
    const handleOnChange=(event)=>{
        console.log('on changed')
        setText(event.target.value)
    }
    const handleScOnClick = () => {
        let sentance_case = text.toLowerCase().charAt(0).toUpperCase() + text.slice(1);
        setText(sentance_case);
    }

    const handleCcOnClick = () => {
        let Capitalized = text.toLowerCase().split(" ").map(text => {return text.charAt(0).toUpperCase() + text.slice(1)}).join("  ");
        setText(Capitalized);
        props.showAlert('capitalize text','success')
    }
    const handleclrOnClick=()=>{
       let clear=""
       setText(clear)
       props.showAlert("clear text",'success')
    }
    const [text, setText] = useState('');


  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" value={text} style={{backgroundColor:props.mode==='dark'?'#343a40':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
      </div>
        <button  class="btn btn-primary" onClick={handleupcase}>convert to uppercase</button>
        <button  class="btn btn-primary mx-2" onClick={handlelocase}>convert to lowercase</button>
        <button  class="btn btn-primary mx-2" onClick={handleCcOnClick}>Capitalized</button>
        <button  class="btn btn-primary mx-2" onClick={handleScOnClick}>sentance_case</button>
        <button  class="btn btn-primary mx-2" onClick={handleclrOnClick}>Clear_text</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='head'>Text summary</h1>
        <p>{text.split(' ').length} words and {text.length} charecter</p>
        <p>{0.008*text.split(' ').length} minute to read </p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
