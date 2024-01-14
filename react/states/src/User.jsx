import { useContext } from 'react';
import { AppContext } from './Context';

const User = () => {
  const { name } = useContext(AppContext);
  return <div>User: {name}</div>;
};
export default User;
