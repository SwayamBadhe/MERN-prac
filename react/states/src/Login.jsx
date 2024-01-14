import { useContext } from 'react';
import { AppContext } from './Context';

const Login = () => {
  const { setName } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
    </div>
  );
};
export default Login;
