import { useState } from 'react';
import Login from './Login';
import User from './User';
import { createContext } from 'react';

export const AppContext = createContext(null);

const Context = () => {
  const [name, setName] = useState('Swayam');
  return (
    <AppContext.Provider value={{ name, setName }}>
      <Login /> <User />
    </AppContext.Provider>
  );
};
export default Context;
