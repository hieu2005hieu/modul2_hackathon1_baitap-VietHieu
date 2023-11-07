import React,{useState} from 'react'
import '../src/components/HackathonCSS.css'
export default function App() {
   const [word, setWord] = useState(0)
  const [letter, setLetter] = useState(0);
  const [Paragraph, setParagraph] = useState(0);
  const handDerValue = (e)=>{
      let value = e.target.value;
      let letterValue1 = value.replace(/\n/g, "");
    let a=letterValue1.trim()
      let letterValue2 = a.length;
      setLetter(letterValue2);
      //đếm word
      let wordValue1 = value.trim();
      let wordValue2 = wordValue1.split(" ").length;
      setWord(wordValue2);
      // đếm paragraph
      let paraValue1 = value.trim();
      let paraValue2 = paraValue1.split("\n").length;
      setParagraph(paraValue2);
    };

  return (
    <>
      <div id="container">
        <h1>Word Counter</h1>
        <div className="feature">
          <div className="word">
            <p>Word</p>
            <p>{word}</p>
          </div>
          <div className="word">
            <p>Letter</p>
            <p>{letter}</p>
          </div>
          <div className="word">
            <p>Paragraph</p>
            <p>{Paragraph}</p>
          </div>
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={handDerValue}
        ></textarea>
        <div className="btn_click">
          <button>Click to lowerose</button>
          <button>Click to uppercase</button>
        </div>
      </div>
    </>
  );
}
