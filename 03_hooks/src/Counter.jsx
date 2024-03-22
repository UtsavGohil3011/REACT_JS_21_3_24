import { useState } from "react"


function Counter(){

    let [counter, setCounter] = useState(0);

    let removeValue = () => {

        if (counter > 0) {

         setCounter(counter - 1)

            
        }
    }

    let addValue = () => {

        if (counter < 5) {

         setCounter(counter + 1)

            
        }
    }




    return(
        <>

        <button onClick={removeValue}>-</button><span>{counter}</span><button onClick={addValue}>+</button>
           
        </>
    )
}

export default Counter
