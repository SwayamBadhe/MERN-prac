// import axios from 'axios';
import { useCallback, useState } from 'react';

import { useEffect } from 'react';
import Parent from './Parent';

export default function App() {
  const [salary, setSalary] = useState(1000);
  const [age, setAge] = useState(20);
  const [id, setId] = useState(1);

  useEffect(() => {
    const intervalwithid = setInterval(() => {
      setId((prevId) => prevId + 1);
    }, 1000);

    return () => {
      clearInterval(intervalwithid);
    };
  }, []);

  return (
    <div className="App">
      <Parent salary={salary} age={age} id={id} />
    </div>
  );
}

{
  /* <Child returnComment={returnComment} />

<button
  onClick={() => {
    setToggle(!toggle);
  }}
>
  Toggle
</button>
<button onClick={changeData}>change data</button>
{toggle && <h1> toggle </h1>} */
}

// const [toggle, setToggle] = useState(false);
// const [data, setData] = useState('Yo, pls sub to the channel!');

// const returnComment = useCallback(
//   (name) => {
//     return data + name;
//   },
//   [data]
// );

// const changeData = () => {
//   setData('Thank you for subscribing!');
// };

// import Child from './Child';
// import { useState } from 'react';
// import { useRef } from 'react';
// import Login from './Login';
// import User from './User';
// import { useContext } from 'react';
// import Context from './Context';
// const inputRef = useRef(null);

// const changeName = () => {
//   setName('Swayam Badhe');
//   console.log('Name Changed');
// };

// <div className="App">
//   <Context />
// </div>

// return (
//   <>
//     <div className="App">
//       <input type="text" ref={inputRef} />
//       <button
//         onClick={() => {
//           inputRef.current.focus();
//           console.log(inputRef.current.value);
//         }}
//       >
//         click
//       </button>
//     </div>
//   </>
// );
