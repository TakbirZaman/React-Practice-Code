import './App.css'
import Counter from './Counter';  

function App() {
 


  function handleClick() {
    alert('button clicked!');
  }

  const handleClick2 = () => {
    alert('button clicked!');
  }

  function handleAdd(num) {
    const newNum = num + 4;
    alert(newNum);
  }

  return (
    <>
    
      <Counter /> 
  
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me Too</button>
      <button onClick={() => handleAdd(12)}>Click Add</button>
    </>
  )
}

export default App
