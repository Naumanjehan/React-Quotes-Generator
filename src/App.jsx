import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setquote] = useState("نماز مومن کی معراج ہے")
  const quotes =
  [
    "نماز مومن کی معراج ہے۔",
    "صبر کا پھل ہمیشہ میٹھا ہوتا ہے۔",
    "قرآن پاک کی تلاوت دل کو سکون دیتی ہے۔",
    "اللہ کے ذکر سے دلوں کو اطمینان ملتا ہے۔",
    "اللہ تعالیٰ سب سے بڑا ہے، اسی پر ایمان رکھو۔",
    "محبت اور شفقت اسلام کی بنیاد ہیں۔",
    "سچائی ایمان کا حصہ ہے۔",
    "اللہ کے راستے میں خرچ کرنا سب سے بہترین عمل ہے۔",
    "مسلمان آپس میں بھائی بھائی ہیں۔"
  ]
  function genQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    console.log(randomNumber)
    setquote(quotes[randomNumber]);
    
  }
  return (
    <>
      <div className='main-container'>
        <h1>Islamic Quote Generator</h1>
        <h2>{quote}</h2>
        <button onClick={genQuote}>Generate Quote</button>
      </div>
    </>
  )
}

export default App
