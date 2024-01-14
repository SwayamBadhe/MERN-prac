import { useState } from 'react';

function App() {
  const [showContent, setshowContent] = useState(false);

  const handleToggle = () => {
    setshowContent(!showContent);
  };

  return (
    <>
      <button onClick={handleToggle}>click</button>
      {showContent && <div>Toogle Content</div>}
    </>
  );
}

export default App;
