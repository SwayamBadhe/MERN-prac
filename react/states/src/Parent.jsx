import { useMemo } from 'react';
import PureComponent from './PureComponent';

const Parent = ({ id, age, salary }) => {
  console.log('Inside Parent Component');

  const memoPureComp = useMemo(() => {
    return <PureComponent salary={salary} age={age} />;
  }, [salary, age]);

  return (
    <div>
      <h1>id: {id}</h1>
      {memoPureComp}
    </div>
  );
};
export default Parent;
