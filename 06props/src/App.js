import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  let myArray = [
    {

      title:'DELL',
      prize:'145560000',
      description:' THIS IOS SHSGH SHSGHSH hns'

    },
    {

      title:'HP',
      prize:'23421000000',
      description:' THIS IOS SHSGH SHSGHSH hns'

    },
    {

      title:'DELL',
      prize:'234321000000',
      description:' THIS IOS SHSGH SHSGHSH hns'

    },
    {

      title:'HP',
      prize:'1000000',
      description:' THIS IOS SHSGH SHSGHSH hns'

    },
  ]
  return (
    
    <>
      
      <div className="text-">

    {
      myArray.map((x,i) => {
return(
  <div style={{backgroundColor:'#212121'}} className="p-10 col-md-4">
      <div style={{backgroundColor:'white'}} class=" w-[500px] rounded-md border ">
        <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt="Laptop" class="h-[200px] w-full rounded-md object-cover"/>
        <div class="p-4">
          <h1 class="text-lg font-semibold">{x.title}</h1>
          <p class="mt-3 text-sm text-gray-600">{x.description}</p>
          <h6>{x.prize}</h6>
          <button type="button" class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"> Read</button>
        </div>
      </div>
    </div>
)
      })
    }
      </div>
    </>
  );
}

export default App;
