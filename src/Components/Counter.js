import React from 'react';
// Import Components Here...

function Counter() {
  const [count, setCount] = React.useState(0);

  return(
    <div>
      <p>count: { count }</p>
      <button onClick={() => setCount(count + 1)}>Click to Increase Count</button>
    </div>
  )
}

export default Counter;