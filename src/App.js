import { useEffect, useState } from "react"





function App() {



  const [advice,setAdvice] = useState("")
  const [count,setCount] = useState(0)
  
  
  const  getAdvice = async () => 
  {
    const res = await fetch("https://api.adviceslip.com/advice") 
    const data = await res.json()
    console.log(data.slip.advice)
    setAdvice(data.slip.advice)
    setCount(c=>c+1 )
  
  }

  useEffect(() => {
    getAdvice()
  },[])

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      {/* <p>You have read <strong>{count}</strong> pieces advice.</p> */}
     <Message count={count}/>

   
    </div>
  );
}

export default App;


const Message = ({count}) => {
  return (
<p>You have read <strong>{count}</strong> pieces advice.</p>
  )
}