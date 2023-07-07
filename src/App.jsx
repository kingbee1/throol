import { useState } from 'react'
import './App.css'


function App() {
//defined a state ariable 'search' for input value
  const [search, setSearch] = useState('');

  //defined a state variable 'myData' to store array of data from api.
  const [myData, setMyData] = useState([])
  

  //used ftch to make a GET HTTP request to retrive data(photos) from the url below.
  fetch('https://jsonplaceholder.typicode.com/users')

  //the response from the endpoint is parsed in json format.
 .then(response => response.json())

 //the response is logged into the console.
  .then(data => setMyData(data))

  //any error during the http request would be caught and logged into the console.
  .catch((err) => {
    console.log(err)
  })

  //this function updates the search state variable and ensures whatever is typed is displayed.
  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }


  return (
      <div className='test'>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={onChangeHandler} />
          <button type="submit">Find</button>
        </form>


        <div>
          {myData.map((item, index) => {
            console.log({item})
            return (
              <div key={index} >
                <p>{item.name}</p>

              </div>
            )
          })}
        </div>





      </div>
      

      

  )
}

export default App
