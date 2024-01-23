
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  // 2. Use a function to handle the button click and update the count
  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      {/* 4. Use curly braces for dynamic content in JSX */}
      <p>Button clicked {count} times</p>

      {/* 3. Pass the handleClick function to the onClick event */}
      {/* <button onClick={handleClick}>Click me</button> */}
      
      {/* 3. by using direct function inside onClick event */}
      <button onClick={()=> setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App
