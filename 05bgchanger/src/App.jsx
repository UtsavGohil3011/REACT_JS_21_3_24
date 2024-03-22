import { useState } from "react"


function App() {

  const [color, setColor] = useState('pink')

  let color_black = function (){
    setColor('black')
  }

  

  return (

    <div style={{backgroundColor:color}} className="w-full h-screen">

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

      <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
        <button onClick={() => setColor('red')} style={{backgroundColor:'red', padding:'10px', borderRadius:'50px', color:'white'}}>RED</button>
        <button onClick={() => setColor('yellow')} style={{backgroundColor:'yellow', padding:'10px', borderRadius:'50px', color:'white'}}>Yellow</button>
        <button onClick={() => setColor('purple')} style={{backgroundColor:'purple', padding:'10px', borderRadius:'50px', color:'white'}}>Purple</button>
        <button onClick={color_black} style={{backgroundColor:'black', padding:'10px', borderRadius:'50px', color:'white'}}>Black</button>
      </div>
    </div>

    </div>
  
  )
}

export default App
