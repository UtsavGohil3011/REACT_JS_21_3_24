import Card from './components/Card.jsx'

function App() {

  let myObj = {
    userName: 'Ravi',
    password: 111
  }

  let newArray = [1,2,3]

  let pera = 'This is a peregrapgh ... '
 

  return (
    <>

    <h1 className='bg-green-400 text-black text-center p-7 mt-10'>This Is TailWind Test</h1>
    <Card text='Utsav' btnText='Click Utsav' someObj={myObj} someArray={newArray} pera={pera} />  
    <Card text='Ravi' btnText='Click Ravi' pera={pera} />  
    <Card text='Fernil' />  


    </>
  )
}

export default App
