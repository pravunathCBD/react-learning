import React, { useEffect, useState } from 'react';

const HooksComponent = () => {
  const [count, setCount] = useState(100);

  // side effects
  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCount(count + 1);
    // }, 1000);
    // return () => {
    //   console.log('component unmounted');
    //   clearInterval(interval);
    // };
  }, [count]);

  const computedValue = React.useMemo(() => {
    return count * count * count * count;
  }, [count]);

  return (
    <div>
      HooksComponent {computedValue}
      <button onClick={() => setCount}>Update Count</button>
    </div>
  );
};

export default HooksComponent;
