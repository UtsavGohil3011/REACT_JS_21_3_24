import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useCallback } from 'react';


function App() {

  const [length, setLength] = useState(8)
  const [numberCheckBoxClicked, setnumber] = useState(false)
  const [charactorCheckBoxClicked, setcharactor] = useState(false)
  const [password, setPassword] = useState()

  const passwordGenarator = useCallback( () => {
    let pass=''
    let str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'

    if (numberCheckBoxClicked) {

      str += '0123456789'
      
    }
    if (charactorCheckBoxClicked) {

      str += '!@#$%^&*()_+'
      
    }

    for (let i = 0; i < length.length; i++) {

     let re =  Math.round(Math.random()*str.length + 1)

     pass = str.charAt(re)

     setPassword(pass)
      
    }




  } , [length, numberCheckBoxClicked, charactorCheckBoxClicked, setPassword])


  return (
    <div className='bd'>

    <h1 className="rpg">Random Password Generator</h1>

    <div className='input_field'>
    <input type='text' value={password}  readOnly></input><button className='btn_copy'>COPY</button>
    </div>

    <div className='range_field'>
      <input type='range' min={4} max={10} value={length} />
      <label className='text-white'>length: {length}</label>
    </div>

    </div>

  );
}

export default App;
